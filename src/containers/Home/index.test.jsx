import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Home from '.';
import * as Actions from '../../ducks/Home/actions';
import Mocks from '../../../api/stubs/mocks';

const mockDispatch = jest.fn();
mockDispatch.mockReturnValue(jest.fn());

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    posts: Mocks.posts,
  }),
}));

describe('<Home /> - Hooks Test', () => {
  const wrapper = mount(<Home />);
  it('Render Parent Container', () => {
    expect(mockDispatch).toHaveBeenCalledWith(Actions.getPosts());
    expect(wrapper.find('.Home').exists()).toBe(true);
  });
});

describe('<Home /> - Snapshot Tests', () => {
  const tree = renderer.create(<Home />).toJSON();
  it('Snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
