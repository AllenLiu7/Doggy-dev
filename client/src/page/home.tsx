import { useEffect } from 'react';
import styled from 'styled-components';

import Feed from '../components/feed';
import RightBar from '../components/rightbar';
import SideBar from '../components/sidebar';
import TopBar from '../components/topbar';
import { useAppDispatch, useAppSelector } from '../Hook/typedReduxHook';
import { fetchFollowingUsers } from '../redux/slice/getFollowingUsers';
import { fetchRecommandUsers } from '../redux/slice/getRecommandUsers';
import {
  fetchTimelinePosts,
  timelinePostsSelector,
} from '../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../redux/slice/loginUser';

export default function Home() {
  const dispatch = useAppDispatch();
  const timelinePosts = useAppSelector(timelinePostsSelector);
  const { currentUser } = useAppSelector(currentUserSelector);

  useEffect(() => {
    dispatch(fetchFollowingUsers(currentUser._id));
    dispatch(fetchTimelinePosts(currentUser._id));
    dispatch(fetchRecommandUsers(currentUser._id));
  }, []);

  return (
    <>
      <TopBar />
      <HomeContainer>
        <SideBar />
        <Feed posts={timelinePosts} isHome isCurrentUser />
        <RightBar />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
