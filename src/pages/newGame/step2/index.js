import React from 'react';

const Step2 = ({ value, onCategoryChange, onNext }) => {
  return (
    <div className="step2">
      <label htmlFor="gameCategory">Asígnale una categoría!</label>
      <input type="text" onChange={onCategoryChange} value={value} placeholder="mixta, ciencias, matemáticas, estudios sociales" />
      <button type="button" className="next" onClick={onNext}>Siguiente</button>
    </div>
  );
}
 
export default Step2;