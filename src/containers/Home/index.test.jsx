import React from 'react';
import renderer from 'react-test-renderer';
// import Redux from 'react-redux';
import { mount } from 'enzyme';

import Home from '.';
import * as Actions from '../../ducks/Home/actions';
import Mocks from '../../../api/stubs/mocks';

const mockDispatch = jest.fn();
// const mockSelector = jest.fn();


jest.mock('react-redux', () => ({
  useSelector: () => ({
    posts: Mocks.posts,
    aaa: 's',
  }),
  // useSelector: () => mockSelector,
  useDispatch: () => mockDispatch,
}));

describe('<Home /> - Hooks Test', () => {
  const mockedDispatch = jest.fn();
  mockDispatch.mockReturnValue(mockedDispatch);
  // mockSelector.mockReturnValue(() => ({ posts: Mocks.posts }));
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
