import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { StyledProfilePic } from './styled-components/styledProfilePic';

interface Props {
  name: string;
  src: string;
}

export default function ProfilePicNameBig({ user }: Props) {
  const { username, profilePicture, _id: userId } = user;
  return (
    <>
      <Link to={`/app/profile/${userId}`}>
        <ProfileWrapper>
          <StyledProfilePic
            src={profilePicture}
            height='80px'
            width='80px'
            borderRadius='10%'
            userId={userId}
          />
          <NameWrapper>{username}</NameWrapper>
        </ProfileWrapper>
      </Link>
    </>
  );
}

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
`;

const NameWrapper = styled.span`
  margin-top: 5px;
  margin-left: 10px;
  text-decoration: none;
`;
