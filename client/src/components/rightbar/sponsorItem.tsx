import styled from 'styled-components';

export default function SponsorItem({ info, company }) {
  return (
    <Container>
      <Image />
      <InfoWrap>
        <Info>Checkout Our discount event</Info>
        <Company>www.hiker.com</Company>
      </InfoWrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #e7e6e6;
  }
`;

const Image = styled.img.attrs({
  src: '../../public/assets/shoe1.jpg',
  alt: 'sponsor',
})`
  // max-height: 150px;
  width: 150px;
  object-fit: contain;
  border-radius: 10px;
`;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const Info = styled.div`
  font-weight: 700;
`;

const Company = styled.div`
  color: lightgrey;
`;
