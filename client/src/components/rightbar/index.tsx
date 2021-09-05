import styled from 'styled-components';

import ProfileRightBar from '../rightbar/profileRightBar';
import BirthdayCard from './birthdayCard';
import SponsorsCard from './sponsersCard';

interface Props {
  isProfile?: boolean;
  editHandler: () => void;
  isEdit: boolean;
}

export default function RightBar({ isProfile, editHandler, isEdit }: Props) {
  const HomeRightBar = () => {
    return (
      <RightBarContainer>
        <BirthdayCard />
        <SponsorsCard />
      </RightBarContainer>
    );
  };

  return isProfile ? (
    <ProfileRightBar editHandler={editHandler} isEdit={isEdit} />
  ) : (
    <HomeRightBar />
  );
}

const RightBarContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 5px;
  height: calc(100vh - 55px);
  overflow-y: scroll;
  position: sticky;
  top: 60px; /* required */
  z-index: 998;

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
