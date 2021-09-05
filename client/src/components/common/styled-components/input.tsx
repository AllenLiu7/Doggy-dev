import styled from 'styled-components';

export const Input = styled.input.attrs((p) => ({
  type: p.type || 'text',
  placeholder: p.placeholder || 'search...',
}))`
  border: none;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
