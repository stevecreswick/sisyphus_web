import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect, combineReducers, bindActionCreators } from 'redux';
import { Field, reduxForm, reducer as formReducer } from 'redux-form';
import PropTypes from 'prop-types';
import { Input } from '../formComponents';
import { addRock } from '../../store/rocks/actions'
import * as rocksSelectors from '../../store/rocks/reducer';

class RockForm extends Component {
  constructor(props){
    super(props);
    autoBind(this);
  }

  handleSubmit = data => this.props.onSubmit( data, this.context.router );

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="add-rock"
        onSubmit={this.props.handleSubmit(this.handleSubmit)}
      >
        <h3>Add a Rock</h3>
        <Field
          name="name"
          type="text"
          component={Input}
          placeholder="Task"
          className="form-field"
        />
        <Field
          name="message"
          type="text"
          component={Input}
          placeholder="Description"
          className="form-field"
        />
        <button
          type="submit"
          className="submit-button"
        >
        </button>
      </form>
    );
  }
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  return errors;
};

// TODO: Is there a way to pass through the formName
export default reduxForm({
  form: 'addRock', // required by reduxForm()
  // validate: validate,
  // warn: (values, props) => { ... }, // optional
  // error: (values, props) => { ... } // optional
})(RockForm)
