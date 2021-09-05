import styled from 'styled-components';

export default function BirthydayInfo({ bDayFriend, numBDay }) {
  return (
    <Container>
      <GiftImage />
      <div>
        <strong>{`${bDayFriend}` && 'Peter Lai'}</strong> and{' '}
        <strong>{`${numBDay}` && 3} other friends</strong> have a birthday today
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const GiftImage = styled.img.attrs({
  src: '../../public/assets/gift.png',
  alt: 'gift',
})`
  height: 50px;
  margin-right: 10px;
`;
