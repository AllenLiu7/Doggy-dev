import styled from 'styled-components';

type Props = {
  alignItems?: string;
};

export const Card = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems || 'flex-start'};
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  width: 85%;
  height: auto;
  background-color: white;
  border-radius: 15px;

  -webkit-box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.29);
`;

//better to extend the component in sc
