import React from 'react';

const Input = ( { input, label, type, placeholder, meta: { touched, error } } ) => {
  return (
    <div>
      {label && <label htmlFor={input.name}>{label}</label>}
      <input
        {...input}
        type={type}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}

export default Input;

// TODO: Delete
