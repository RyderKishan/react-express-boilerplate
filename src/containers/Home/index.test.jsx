import React from 'react';
import renderer from 'react-test-renderer';
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

describe('<Home /> - Functionality Test', () => {
  const wrapper = shallow(<Home />);
  it('Default Behaviour', () => {
    expect(wrapper.find('.Home').exists()).toBe(true);
    expect(wrapper.find('.Home .actions').exists()).toBe(true);
    expect(wrapper.find('.actions #fetch-results').exists()).toBe(true);
    expect(wrapper.find('.actions #clear-results').exists()).toBe(true);
    expect(wrapper.find('.Home .results').exists()).toBe(true);
  });
  it('Fetch Results', () => {
    wrapper.find('.actions #fetch-results').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(Actions.getPosts());
  });
  it('Clear Results', () => {
    wrapper.find('.actions #clear-results').simulate('click');
    expect(mockDispatch).toHaveBeenCalledWith(Actions.setPosts([]));
  });
});

describe('<Home /> - Snapshot Tests', () => {
  const tree = renderer.create(<Home />).toJSON();
  it('Snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
