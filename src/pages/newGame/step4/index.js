import React from 'react';
import { withRouter } from 'react-router-dom'

import "./Step4.scss";

const Step4 = ({ startOver, gameReview, history }) => {
  return (
    <div className="step step4">
      <div className="horizontal">
        <div>
          <h2>Juego</h2>
          <p className="summary">{gameReview.name}</p>
        </div>
        <div>
          <h2>Categoría</h2>
          <p className="summary">{gameReview.categories}</p>
        </div>
      </div>
      <h2>Preguntas</h2>
      <div className="questions">
      {gameReview.questions.questions.map((question, i) => (
        <div key={`question_${i}`}>
          <p>{question.question}</p>
          <div className="summary-options-grid">
            {question.answerOptions.map((option, j) => (
              <img key={`image-${j}`} src={option} alt="respuesta" />
            ))}
          </div>
        </div>
      ))}
      </div>
      <button className="next" type="button" onClick={() => history.push('/mis-juegos')}>Ir a mis juegos</button>
      <button className="next" type="button" onClick={startOver}>Nuevo juego</button>
    </div>
  );
};

export default withRouter(Step4);
