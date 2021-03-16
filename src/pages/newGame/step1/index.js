import React from 'react';

const Step1 = ({ value, onNameChange, onNext }) => {
  return (
    <div className="step1">
      <label htmlFor="gameName">Dale un nombre a tu juego!</label>
      <input type="text" onChange={onNameChange} value={value} placeholder="Ríos de Costa Rica, Partes del cuerpo humano" />
      <button type="button" className="next" onClick={onNext}>Siguiente</button>
    </div>
  );
}
 
export default Step1;