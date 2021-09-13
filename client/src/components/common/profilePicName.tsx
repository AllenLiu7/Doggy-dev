import React from 'react';
import styled from 'styled-components';

import { StyledProfilePic } from './styled-components/styledProfilePic';

interface Props {
  name: string;
  src: string;
}

export default React.memo(function ProfilePicName({ name, src, id }: Props) {
  return (
    <>
      <ProfileWrapper>
        <StyledProfilePic src={src} userId={id} />
        <NameWrapper>{name}</NameWrapper>
      </ProfileWrapper>
    </>
  );
});

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const NameWrapper = styled.span`
  margin-left: 10px;
`;
