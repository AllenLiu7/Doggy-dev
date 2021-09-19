import { shallow } from 'enzyme';
import React from 'react';

import PostCardLike from './postCardLike';

it('renders without crashing', () => {
  expect(shallow(<PostCardLike />)).toMatchSnapshot();
});
