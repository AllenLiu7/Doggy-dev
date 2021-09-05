import styled from 'styled-components';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

type Props = {
  friendReq?: number;
  messages?: number;
  notices?: number;
};

export default function TopBarIcon({
  friendReq = 1,
  messages = 10,
  notices = 2,
}: Props) {
  return (
    <>
      <Container>
        <IconContainer>
          <PermIdentityOutlinedIcon />
          <IconBadge>{friendReq}</IconBadge>
        </IconContainer>
        <IconContainer>
          <ChatIcon />
          <IconBadge>{messages}</IconBadge>
        </IconContainer>
        <IconContainer>
          <NotificationsIcon />
          <IconBadge>{notices}</IconBadge>
        </IconContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0 30px;
`;

const IconContainer = styled.div`
  position: relative;
  display: flex;
  margin: 0 10px;
  color: white;
  cursor: pointer;
`;

const IconBadge = styled.span`
  background-color: red;
  border-radius: 50px;
  height: 15px;
  width: 15px;
  position: absolute;
  right: -10px;
  top: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 9px;
  font-weight: 700;
`;
