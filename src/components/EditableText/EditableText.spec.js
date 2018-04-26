import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { spy } from 'sinon';
import EditableText from './EditableText';


describe('<EditableText />', () => {
  it('calls render', () => {
    spy(EditableText.prototype, 'render');

    const wrapper = mount(<EditableText />);
    expect(EditableText.prototype.render.calledOnce).to.equal(true);
  });

  it( 'renders', () => {
    const wrapper = mount(<EditableText />);
    expect(wrapper.exists()).to.equal(true)
  });

  it('calls componentDidMount', () => {
    spy(EditableText.prototype, 'componentDidMount');

    const wrapper = mount(<EditableText />);
    expect(EditableText.prototype.componentDidMount.calledOnce).to.equal(true);
  });
});
