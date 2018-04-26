import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import TextInput from './TextInput';


describe('<TextInput />', () => {
  it('calls render', () => {
    spy(TextInput.prototype, 'render');

    const wrapper = mount(<TextInput />);
    expect(TextInput.prototype.render.calledOnce).to.equal(true);
  });

  it('renders', () => {
    const wrapper = mount(<TextInput />);
    expect(wrapper.exists()).to.equal(true)
  });

  it('calls componentDidMount', () => {
    spy(TextInput.prototype, 'componentDidMount');

    const wrapper = mount(<TextInput />);
    expect(TextInput.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
