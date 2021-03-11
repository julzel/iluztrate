import React from 'react';

const TextInput = ({ label, type, placeholder, value, handleInputChange }) => {

  return (
    <div className="text-input">
      {label && <label>{label}</label>}
      <input type={type} placeholder={placeholder} value={value} onChange={handleInputChange} />
    </div>
  );
}
 
export default TextInput;