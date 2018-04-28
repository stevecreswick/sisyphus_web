// import React, { Component } from 'react';
// import { compose, combineReducers, bindActionCreators } from 'redux';
// import { connect } from 'react-redux'
// import { Field, reduxForm, reducer as formReducer } from 'redux-form';
// import PropTypes from 'prop-types';
// import { Input } from '../formComponents';

// class ResourceForm extends Component {
//   constructor(props){
//     super(props);
//   }

//   handleSubmit = data => this.props.onSubmit( data, this.context.router );

//   render() {
//     const { handleSubmit } = this.props;

//     return (
//       <form
//         className="resource-form"
//         onSubmit={this.props.handleSubmit(this.handleSubmit)}
//       >
//         <Field
//           name="name"
//           type="text"
//           component={Input}
//           placeholder="Task"
//           className="form-field"
//         />
//         <Field
//           name="message"
//           type="text"
//           component={Input}
//           placeholder="Description"
//           className="form-field"
//         />
//         <button
//           type="submit"
//           className="submit-button"
//         >
//         </button>
//       </form>
//     );
//   }
// };

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }
//   return errors;
// };

// let FormAddress = compose(
//   // Connext
//   connect((state, props) => (
//     { 
//     // validate: validate,
//     // warn: (values, props) => { ... }, // optional
//     // error: (values, props) => { ... } // optional
//       form: props.identifier 
//     }

//   )),
//   reduxForm(
//     {
//       destroyOnUnmount: false,
//       asyncBlurFields: []
//     }
//   ))(ResourceForm);

// module.exports = FormAddress
