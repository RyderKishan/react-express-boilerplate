import React from 'react';
import renderer from 'react-test-renderer';
// import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import Home from '.';
import * as Actions from '../../ducks/Home/actions';
// import mockStore from '../../stores/mockStore';
import Mocks from '../../../api/stubs/mocks';

// const store = mockStore({});

const mockDispatch = jest.fn();
mockDispatch.mockReturnValue(jest.fn());
const mockSelector = {
  posts: [],
  isPostFetching: false,
};

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => mockSelector,
}));

describe('<Home /> - Functionality Test - Empty', () => {
  const wrapper = shallow(<Home />);
  it('Default Behaviour', () => {
    expect(wrapper.find('.Home').exists()).toBe(true);
    expect(wrapper.find('.Home .actions').exists()).toBe(true);
    expect(wrapper.find('.actions #fetch-results').exists()).toBe(true);
    expect(wrapper.find('.actions #clear-results').exists()).toBe(true);
    expect(
      wrapper.find('.Home .results .postContainer .make-center').text(),
    ).toBe('No Results');
  });
  it('Fetch Results', () => {
    wrapper.find('.actions #fetch-results').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(Actions.getPosts());
  });
});

describe('<Home /> - Functionality Test - Loading', () => {
  mockSelector.isPostFetching = true;
  const wrapper = shallow(<Home />);
  it('Display Loader', () => {
    expect(
      wrapper.exists('.make-center #posts-loading'),
    ).toBe(true);
  });
});

describe('<Home /> - Functionality Test - Posts', () => {
  mockSelector.posts = Mocks.posts;
  mockSelector.isPostFetching = false;
  const wrapper = shallow(<Home />);
  it('Display Results', () => {
    expect(
      wrapper.find('.Home .results .postContainer').children().length,
    ).toBeGreaterThan(0);
  });
  it('Clear Results', () => {
    wrapper.find('.actions #clear-results').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(Actions.setPosts([]));
  });
});

describe('<Home /> - Snapshot Tests', () => {
  mockSelector.posts = Mocks.posts;
  mockSelector.isPostFetching = false;
  const tree = renderer.create(<Home />).toJSON();
  it('Snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
