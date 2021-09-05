import { useState } from 'react';
import styled from 'styled-components';

import { StyledHr } from '../common/styled-components/hr';
import { StyledButton } from '../common/styled-components/styledButton';
import SideBarFriendList from './sideBarFriendList';
import SideBarLinkList from './sideBarLinkList';

export default function SideBar() {
  const [show, setShow] = useState(true);
  const handdleShowMore = () => {
    setShow(!show);
  };

  return (
    <>
      <SideBarContainer>
        <SideBarLinkList show={show} />

        <StyledButton onClick={() => handdleShowMore()}>Show more</StyledButton>

        <StyledHr width='90%' />
        <SideBarFriendList />
      </SideBarContainer>
    </>
  );
}

const SideBarContainer = styled.div`
  flex: 3;
  height: calc(100vh - 55px);
  padding-left: 30px;
  overflow-y: scroll;
  position: sticky;
  top: 55px; /* required */

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
