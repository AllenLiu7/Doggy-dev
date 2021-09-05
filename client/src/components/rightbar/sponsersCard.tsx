import styled from 'styled-components';
import SponsorItem from './sponsorItem';
import { StyledHr } from '../common/styled-components/hr';

export default function SponsorCard() {
  return (
    <Container>
      <Title>Sponsored</Title>
      <SponsorItem />
      <SponsorItem />
      {/* <StyledHr /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  height: auto;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
  color: #a5a5a5;
`;
