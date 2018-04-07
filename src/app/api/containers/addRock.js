import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import autoBind from 'react-autobind';
import * as rocksActions from '../store/rocks/actions';
import * as rocksSelectors from '../store/rocks/reducer';
import { formType } from '../types';

import Input from '../components/forms/input';

type Props = formType;

class AddRock extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  props: Props

  handleSubmit( data ) {
    this.props.onSubmit(data);
  }

  componentDidMount() {
    console.log('Add Rock Form Added');
    console.log(this.props.rocksByName);
  }

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div className="add-rock-container">
        Adding
        <form
          className='rock-form'
          onSubmit={this.handleSubmit()}
        >
          <Field name="name" type="text" component={Input} placeholder="Email" />

        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'addRock',
  validate,
})(AddRock);
