import styled from 'styled-components';

export default function GoogleButton() {
  return (
    <>
      <Container>
        <IconWrapper>
          <GoogleIcon src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' />
        </IconWrapper>
        <ButtonText>
          <b>Sign in with google</b>
        </ButtonText>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 38px;
  margin-top: 20px;
  background-color: #4285f4;
  border-radius: 3px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  &:active {
    background: #1669f2;
  }
`;

const IconWrapper = styled.div`
  margin-top: 1px;
  margin-left: 1px;
  width: 40px;
  height: 36px;
  border-radius: 2px;
  background-color: white;
`;

const GoogleIcon = styled.img`
  margin-top: 11px;
  margin-left: 11px;
  width: 18px;
  height: 18px;
`;

const ButtonText = styled.p`
  margin: 11px 11px 0 60px;
  color: white;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: 'Roboto';
`;
