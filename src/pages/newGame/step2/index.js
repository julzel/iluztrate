import React, { useState } from 'react';

const EMPTY_STRING = '';

const Step2 = ({ onNext }) => {
  const [value, setValue] = useState(EMPTY_STRING);

  const onCategoryChange = e => setValue(e.target.value);

  const onStep2Submit = e => {
    e.preventDefault();
    onNext(value.split(','));
  }
  return (
    <form className="step step2" onSubmit={onStep2Submit}>
      <textarea type="text" onChange={onCategoryChange} value={value} placeholder="Categoría" />
      <button type="submit" className="next" disabled={!value || value === EMPTY_STRING}>Siguiente</button>
    </form>
  );
}
 
export default Step2;