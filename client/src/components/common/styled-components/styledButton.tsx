import styled from 'styled-components';

type Props = {
  color?: string;
  bgColor?: string;
  width?: string;
  margin?: string;
};

export const StyledButton = styled.button<Props>`
  color: ${(props) => props.color || 'white'};
  background-color: ${(props) => props.bgColor || 'lightblue'};
  border-radius: 5px;
  border-style: none;
  height: auto;
  width: auto;
  margin: ${(props) => props.margin || '0 0 30px 0'};
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;
