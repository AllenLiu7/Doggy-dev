import AddIcon from '@material-ui/icons/Add';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useDefineUser } from '../../Hook/useDefineUser';
import { fetchFollowingUsers } from '../../redux/slice/getFollowingUsers';
import { fetchTimelinePosts } from '../../redux/slice/getTimelinePosts';
import {
  currentUserSelector,
  follow,
  unfollow,
} from '../../redux/slice/loginUser';
import { _followUser, _unfollowUser } from '../../service/api/user';
import { StyledButton } from '../common/styled-components/styledButton';
import RightBarFriendListCard from '../profile/rightBarFriendListCard';
import UserBioCard from '../profile/userBioCard';
import SponsorsCard from './sponsersCard';

interface Props {
  editHandler: () => void;
  isEdit: boolean;
}

export default function ProfileRightBar({ editHandler, isEdit }: Props) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(currentUserSelector);
  const { isCurrentUser, paramId } = useDefineUser(currentUser);

  const [isFollowed, setIsFollowed] = useState<boolean | null>(null);

  useEffect(() => {
    const isFollowed = currentUser.followings.includes(paramId);
    if (isFollowed) return setIsFollowed(true);

    return setIsFollowed(false);
  }, [paramId, currentUser]);

  const handleClick = async () => {
    if (isFollowed) {
      await _unfollowUser(currentUser._id, paramId);
      dispatch(unfollow(paramId));
      dispatch(fetchTimelinePosts(currentUser._id));
      dispatch(fetchFollowingUsers());
      return setIsFollowed(false);
    }
    await _followUser(currentUser._id, paramId);
    dispatch(follow(paramId));
    dispatch(fetchTimelinePosts(currentUser._id));
    dispatch(fetchFollowingUsers());
    return setIsFollowed(true);
  };

  return (
    <RightBarContainer>
      {isCurrentUser ? (
        <StyledButton onClick={editHandler}>
          {isEdit ? 'Cancel Edit' : 'Edit Profile'}
        </StyledButton>
      ) : (
        <StyledButton onClick={handleClick}>
          {isFollowed ? 'Unfollow' : 'Follow'}
          {isFollowed ? <RemoveCircleOutlineIcon /> : <AddIcon />}
        </StyledButton>
      )}
      <UserBioCard />
      <RightBarFriendListCard />
      <SponsorsCard />
    </RightBarContainer>
  );
}

const RightBarContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
  padding-top: 10px;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  position: sticky;
  top: 60px; /* required */
  z-index: 998;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 7px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #c4c2c2;
  }
`;
