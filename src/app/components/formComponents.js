import React from 'react';

export const Input = ( { input, label, type, placeholder, meta: { touched, error } } ) => {
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
