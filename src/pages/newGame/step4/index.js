import React from "react";

import './Step4.scss';

const Step4 = ({ gameReview }) => {
  return (
    <div className="step step4" >
      <h1>Juego</h1>
      <h2><span>Nombre: </span> {gameReview.name}</h2>
      <p>{gameReview.categories}</p>
      <p>Preguntas totales: {gameReview.questions.totalQuestions}</p>
      {gameReview.questions.questions.map((question, i) => (
        <div key={`question_${i}`}>
          <p>{question.question}</p>
          {question.answerOptions.map((option) => (
            <div>
              <img src={option} alt="respuesta" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Step4;
