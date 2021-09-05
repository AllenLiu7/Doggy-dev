import HomeIcon from '@material-ui/icons/Home';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { currentUserSelector } from '../../redux/slice/loginUser';

export default function TopBarLink() {
  const { currentUser } = useSelector(currentUserSelector);
  const userId = currentUser._id;

  return (
    <>
      <StyledLink to='/app'>
        <HomeIcon />
      </StyledLink>
      <StyledLink to={`/app/profile/${userId}`}>
        <PeopleAltOutlinedIcon />
      </StyledLink>
      <StyledLink to='/'>
        <VideoLibraryIcon />
      </StyledLink>
    </>
  );
}

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
