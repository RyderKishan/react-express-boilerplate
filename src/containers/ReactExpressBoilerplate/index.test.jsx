import React from 'react';
import renderer from 'react-test-renderer';
import { render, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from '.';
import * as Actions from '../../ducks/App/actions';
import Mocks from '../../../api/stubs/mocks';

const mockDispatch = jest.fn();
mockDispatch.mockReturnValue(jest.fn());

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: () => ({
    userDetails: Mocks.userDetails,
  }),
}));

describe('<App /> - Hooks Test', () => {
  const wrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  it('useEffect', () => {
    expect(wrapper.find('.App').exists()).toBe(true);
    expect(mockDispatch).toHaveBeenCalledWith(Actions.getUserDetails());
  });
});

describe('<App /> - Snapshot Tests Renderer', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
  it('Snapshot renderer', () => {
    expect(tree).toMatchSnapshot();
  });
});

const linkRenderer = (link) => render(
  <MemoryRouter initialEntries={[link]}>
    <App />
  </MemoryRouter>,
);

describe('<App /> - Route Tests', () => {
  it('Render Home Container', () => {
    const wrapper = linkRenderer('/');
    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('.Home')).toHaveLength(1);
  });
  it('Render Contact Container', () => {
    const wrapper = linkRenderer('/contact');
    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('.Contact')).toHaveLength(1);
  });
  it('Render Profile Container', () => {
    const wrapper = linkRenderer('/profile');
    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('.Profile')).toHaveLength(1);
  });
  it('Render FallBack Container', () => {
    const wrapper = linkRenderer('/error');
    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('.FallBack')).toHaveLength(1);
  });
});
