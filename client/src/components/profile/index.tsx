import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { useDefineUser } from '../../Hook/useDefineUser';
import { timelinePostsSelector } from '../../redux/slice/getTimelinePosts';
import { currentUserSelector } from '../../redux/slice/loginUser';
import { getUnfollowedPostsReq } from '../../service/api/post';
import EditBar from '../edit/editBar';
import Feed from '../feed';
import ProfileBanner from '../profile/profileBanner';
import RightBar from '../rightbar';

export default function ProfileBar() {
  const [isEdit, setEdit] = useState<boolean | null>(false);
  const [isFollowed, setIsFollowed] = useState<boolean | null>(null);
  const [posts, setPosts] = useState([]);
  const { currentUser } = useSelector(currentUserSelector);
  const { user, isCurrentUser, paramId } = useDefineUser(currentUser); //define the user for the profile page.
  const timelinePosts = useSelector(timelinePostsSelector);

  //check if the user is followed.
  useEffect(() => {
    if (
      currentUser._id === paramId ||
      currentUser.followings.includes(paramId)
    ) {
      return setIsFollowed(true);
    }
    return setIsFollowed(false);
  }, [currentUser, paramId]);

  useEffect(() => {
    if (isFollowed) {
      return setPosts(timelinePosts.filter((post) => post.userId === paramId));
    }
    const getUnfollowPosts = async (id) => {
      const response = await getUnfollowedPostsReq(id);

      return setPosts(
        response.data.sort((p1, p2) => {
          new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    getUnfollowPosts(paramId);
  }, [isFollowed, timelinePosts, paramId]);

  const handleEditButton = () => {
    setEdit(!isEdit);
  };

  return (
    <Container>
      <ProfileBanner user={user} />
      <Content>
        {isEdit ? (
          <EditBar />
        ) : (
          <Feed posts={posts} isCurrentUser={isCurrentUser} />
        )}
        <RightBar isProfile editHandler={handleEditButton} isEdit={isEdit} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  flex: 11;
`;

const Content = styled.div`
  display: flex;
`;
