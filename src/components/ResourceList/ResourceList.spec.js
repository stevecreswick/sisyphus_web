import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import ResourceList from './ResourceList';


describe('<ResourceList />', () => {
  it('calls render', () => {
    spy(ResourceList.prototype, 'render');

    const wrapper = mount(<ResourceList />);
    expect(ResourceList.prototype.render.calledOnce).to.equal(true);
  });

  it('renders', () => {
    const wrapper = mount(<ResourceList />);
    expect(wrapper.exists()).to.equal(true)
  });

  it('calls componentDidMount', () => {
    spy(ResourceList.prototype, 'componentDidMount');

    const wrapper = mount(<ResourceList />);
    expect(ResourceList.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
