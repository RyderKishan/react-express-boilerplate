/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import FallBack from '.';

const props = {
  location: {
    search: '?error=LOGGED_OUT',
  },
};

describe('<FallBack /> - Snapshot Tests Renderer', () => {
  const tree = renderer.create(<FallBack {...props} />);
  it('Snapshot renderer', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('<FallBack /> - Route Tests', () => {
  it('404 Error', () => {
    const localProps = { location: { search: '' } };
    const wrapper = shallow(<FallBack {...localProps} />);
    expect(wrapper.find('.FallBackHeader').text()).toBe('ERRCODE: 404');
  });
  it('Possible Error', () => {
    const localProps = { location: { search: '?error=LOGGED_OUT' } };
    const wrapper = shallow(<FallBack {...localProps} />);
    expect(wrapper.find('.FallBackHeader').text()).toBe('ERRCODE: LOGGED_OUT');
  });
  it('Im-Possible Error', () => {
    const localProps = { location: { search: '?error=ERROR' } };
    const wrapper = shallow(<FallBack {...localProps} />);
    expect(wrapper.find('.FallBackHeader').text()).toBe('ERRCODE: 404');
  });
});
