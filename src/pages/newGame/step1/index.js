import React, { useState } from 'react';

import './Step1.scss';

const EMPTY_STRING = '';

const Step1 = ({ onNext }) => {
  const [value, setValue] = useState(EMPTY_STRING);

  const onNameChange = e => setValue(e.target.value);

  const onStep1Submit = e => {
    e.preventDefault();
    onNext(value);
  }

  return (
    <form className="step step1" onSubmit={onStep1Submit}>
      <textarea id="gameName" type="text" onChange={onNameChange} value={value} placeholder="Dale un nombre a tu juego!" />
      <button type="submit" className="next" disabled={!value || value === EMPTY_STRING}>Siguiente</button>
    </form>
  );
}
 
export default Step1;