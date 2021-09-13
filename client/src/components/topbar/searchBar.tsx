import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import styled from 'styled-components';

import { Input } from '../common/styled-components/input';

function SearchBar() {
  return (
    <>
      <Container>
        <Icon />
        <Input />
      </Container>
    </>
  );
}

export default React.memo(SearchBar);

const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 30px;
  width: 280px;
  overflow: hidden;
`;

const Icon = styled(SearchIcon).attrs({
  style: { fontSize: 25 },
})`
  color: grey;
  font-size: 600;
  margin-left: 10px;
`;
