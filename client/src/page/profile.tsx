import styled from 'styled-components';

import ProfileBar from '../components/profile';
import SideBar from '../components/sidebar';
import TopBar from '../components/topbar';

export default function Profile() {
  return (
    <>
      <TopBar />
      <Container>
        <SideBar />
        <ProfileBar />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

