import React from "react";

import "./Summary.scss";

const Summary = ({ gameReview, history, startOver, goBack }) => {

  const playGame = () => {
    localStorage.setItem('gameToPlay', JSON.stringify(gameReview))
    window.open('/jugar', '/blank');
  }

  return (
    <div className="game-summary">
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
            <p>{i+1}. {question.question}</p>
            <div className="summary-options-grid">
              {question.answerOptions.map((option, j) => (
                <img key={`image-${j}`} src={option.src} alt="respuesta" className={`option-image ${option.correctAnswer ? ' selected' : ''}`} />
              ))}
            </div>
            <p className="time"><i className="fa fa-clock" />{question.time} segundos</p>
          </div>
        ))}
      </div>
      <div className="show-actions">
        {history && (
          <button
            className="next"
            type="button"
            onClick={() => history.push("/mis-juegos")}
          >
            Ir a mis juegos
          </button>
        )}
        {goBack && (
          <button className="next" type="button" onClick={playGame}>
            Jugar
          </button>
        )}
        {goBack && (
          <button className="next" type="button" onClick={goBack}>
            Regresar
          </button>
        )}
        {startOver && (
          <button className="next" type="button" onClick={startOver}>
            Nuevo juego
          </button>
        )}
      </div>
    </div>
  );
};

export default Summary;
