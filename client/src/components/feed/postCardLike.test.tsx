import { shallow } from 'enzyme';

import PostCardLike from './postCardLike';

describe('PostCardLike component', () => {
  test('renders', () => {
    const wrapper = shallow(
      <PostCardLike handleLikeClick={() => {}} like={1} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
