import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import styled from 'styled-components';

import { StyledHr } from '../common/styled-components/hr';
import BirthydayInfo from './birthydayInfo';

const PF = process.env.PUBLIC_FOLDER;

export default function BirthdayCard() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };

  return (
    <Container onMouseEnter={onHover} onMouseLeave={onLeave}>
      {hover ? <StyledCancel /> : null}
      <BirthydayInfo />
      <PartyImage />
      <StyledHr />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: white;
  width: 85%;
  height: auto;
  margin: 10px 0 10px 0;
`;

const StyledCancel = styled(CloseIcon)`
  position: absolute;
  height: 20px;
  right: 1px;
  cursor: pointer;
`;

const PartyImage = styled.img.attrs({
  src: `${PF}birthday.jpg`,
  alt: 'gift',
})`
  width: 100%;
  height: auto;
  border-radius: 20px;
`;
3;
