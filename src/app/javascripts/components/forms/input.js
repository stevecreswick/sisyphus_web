import React from 'react';

const Input = ( { input, label, type, placeholder, meta: { touched, error } } ) =>
  <div>
    {label && <label htmlFor={input.name}>{label}</label>}
    <input
      {...input}
      type={type}
      placeholder={placeholder}
      className="form-control"
    />
    {meta.touched && meta.error &&
      <div>{meta.error}</div>
    }
  </div>;

export default Input;
