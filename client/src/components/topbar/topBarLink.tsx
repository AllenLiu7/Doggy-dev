import HomeIcon from '@material-ui/icons/Home';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TopBarLink({ id }) {
  return (
    <>
      <StyledLink to='/app'>
        <HomeIcon />
      </StyledLink>
      <StyledLink to={`/app/profile/${id}`}>
        <PeopleAltOutlinedIcon />
      </StyledLink>
      <StyledLink to='/'>
        <VideoLibraryIcon />
      </StyledLink>
    </>
  );
}

export default React.memo(TopBarLink);

const StyledLink = styled(Link)`
  display: flex;
  height: 100%;
  flex: 1 1 180px;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  &:hover {
    border-bottom-style: solid;
    border-color: white;
    border-bottom-width: 5px;
  }
`;
