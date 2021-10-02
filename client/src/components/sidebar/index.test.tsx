import { mount, shallow } from 'enzyme';

import Component from './index';

describe('sideBar', () => {
  describe('initial state', () => {
    const wrapper = shallow(<Component />);

    test('renders', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("after 'show more' button clicked", () => {});
});
