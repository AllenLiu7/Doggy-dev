import styled from 'styled-components';

export default function TopBarLogo() {
  return (
    <div>
      <Logo>Doggy</Logo>
    </div>
  );
}

const Logo = styled.span`
  color: white;
  font-size: 20px;
  margin: 0 20px;
`;
