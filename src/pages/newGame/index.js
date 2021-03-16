import React from 'react';
import Header from '../../components/header';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';

const NewGame = () => {
  return (
    <div className="nuevo-juego">
      <Header />
      <Step1 />
      <Step2 />
      <Step3 />
    </div>
  );
}
 
export default NewGame;