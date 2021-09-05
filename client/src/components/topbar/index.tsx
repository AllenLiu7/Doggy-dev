import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import {
  currentUserSelector,
  logoutUser,
  updateToken,
} from '../../redux/slice/loginUser';
import { logOutReq, refreshTokenReq } from '../../service/api/auth';
import { axiosJWT } from '../../service/api/index';
import { StyledProfilePic } from '../common/styled-components/styledProfilePic';
import SearchBar from './searchBar';
import TopBarIcon from './topBarIcons';
import TopBarLink from './topBarLink';
import TopBarLogo from './topBarLogo';

export default function TopBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector(currentUserSelector);

  useEffect(() => {
    //setting up silence refresh
    const timer = setInterval(async () => {
      try {
        console.log('interval verifyUser runs');
        const response = await refreshTokenReq();
        const newToken = response.data.token;
        if (newToken) {
          dispatch(updateToken(response.data));

          axiosJWT.defaults.headers.common['authorization'] =
            'Bearer ' + newToken;
        }
      } catch (err) {
        console.log(err);
      }
    }, 15 * 1000 - 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await logOutReq();
      dispatch(logoutUser());

      history.push('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <TopBarLeft>
          <TopBarLogo />
          <SearchBar />
        </TopBarLeft>

        <TopBarCenter>
          <TopBarLink />
        </TopBarCenter>

        <TopBarRight>
          <TopBarIcon />
          <Link to={`/app/profile/${currentUser._id}`}>
            <StyledProfilePic src={currentUser.profilePicture} />
          </Link>
          <LogoutDiv onClick={handleLogout}>Log out</LogoutDiv>
        </TopBarRight>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  background-color: lightblue;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const TopBarLeft = styled.div`
  flex: 3;
  display: flex;

  align-items: center;
`;

const TopBarCenter = styled.div`
  flex: 5;
  display: flex;
  align-items: center;
`;

const TopBarRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 60px;
`;

const LogoutDiv = styled.div`
  padding-left: 30px;
  color: white;
  cursor: pointer;
`;
