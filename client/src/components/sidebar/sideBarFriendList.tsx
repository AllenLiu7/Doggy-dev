import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useAppSelector } from '../../Hook/typedReduxHook';
import { recommandUsersSelector } from '../../redux/slice/getRecommandUsers';
import { User } from '../../types/common.type';
import ProfilePicName from '../common/profilePicName';

export default function SideBarFriendList() {
  const recommandUsers = useAppSelector(recommandUsersSelector);

  return (
    <>
      <h4>People you may know</h4>
      {recommandUsers.map((user: User, index: number) => (
        <Link key={index} to={`/app/profile/${user._id}`}>
          <ProfilePicNameWrap>
            <ProfilePicName
              name={user.username}
              src={user.profilePicture}
              key={index}
              id={user._id}
            />
          </ProfilePicNameWrap>
        </Link>
      ))}
    </>
  );
}

const ProfilePicNameWrap = styled.div`
  margin-bottom: 20px;
`;
