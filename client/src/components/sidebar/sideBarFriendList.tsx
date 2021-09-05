import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { recommandUsersSelector } from '../../redux/slice/getRecommandUsers';
import ProfilePicName from '../common/profilePicName';

export default function SideBarFriendList() {
  const recommandUsers = useSelector(recommandUsersSelector);

  return (
    <>
      <h4>People you may know</h4>
      {recommandUsers.map((user, index) => (
        <Link key={index} to={`/app/profile/${user._id}`}>
          <ProfilePicNameWrap>
            <ProfilePicName
              name={user.username}
              src={user.profilePicture}
              key={index}
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
