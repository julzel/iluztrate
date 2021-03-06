import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/header';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import './NewGame.scss';
import Step4 from './step4';

const COLORS = ["#ec9a29", "#7e935b", "#a8201a", "#ca5d22"];

const newGameDefault = {
  id: null,
  name: '',
  categories: [],
  questions: {
    totalQuestions: 0,
    questions: []
  }
};

const NewGame = () => {
  const [ currentStep, setCurrentStep ] = useState(0)
  const [ newGame, setNewGame ] = useState(newGameDefault);

  const onStep1Next = name => {
    newGame.name = name;
    setNewGame({ ...newGame });
    setCurrentStep(currentStep + 1);
  }

  const onStep2Next = categories => {
    newGame.categories = [ ...categories ];
    setNewGame({ ...newGame });
    setCurrentStep(currentStep + 1);
  }

  const onStep3Next = (questions, final) => {
    newGame.id = uuidv4();
    newGame.questions = questions;
    setNewGame({ ...newGame });
    if (final) {
      let games = JSON.parse(localStorage.getItem('games'));
      if (games) {
        games.push(newGame)
      } else {
        games = [newGame]
      }
      localStorage.setItem('games', JSON.stringify(games));
      setCurrentStep(currentStep + 1);
    }
  }

  const onStartOver = () => setCurrentStep(0);

  return (
    <div className="new-game" style={{ backgroundColor: COLORS[currentStep]}}>
      <Header />
      {currentStep === 0 && <Step1 onNext={onStep1Next} />}
      {currentStep === 1 && <Step2 onNext={onStep2Next} />}
      {currentStep === 2 && <Step3 onNext={onStep3Next} />}
      {currentStep === 3 && <Step4 startOver={onStartOver} gameReview={newGame} />}
    </div>
  );
}
 
export default NewGame;