import styled from 'styled-components';

type Props = {
  width?: string;
};

export const StyledHr = styled.hr<Props>`
  display: block;
  width: ${(p) => p.width || '100%'};
  height: 0.8px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 15px 0 30px 0;
`;
