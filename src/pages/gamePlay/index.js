import React, { useState, useCallback, useEffect } from "react";
import Outro from "../../components/outro";

import "./GamePlay.scss";

const COLORS = ["#ec9a29", "#7e935b", "#a8201a", "#0f8b8d"];

const GamePlay = ({ history }) => {
  const [game] = useState(JSON.parse(localStorage.getItem("gameToPlay")));
  const [hideOptions, setHideOptions] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null);
  const [startCounting, setStartCounting] = useState(false);
  const [displayOutro, setDisplayOutro] = useState(false);

  const startOver = () => {
    setCurrentQuestion(0)
    setHideOptions(false);
    setStartCounting(false);
    setDisplayOutro(false);
  };

  const handleOnNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    setHideOptions(false);
    setStartCounting(false);
  }

  const count = useCallback(() => {
    if (timeLeft > 0) {
      setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft !== null && !hideOptions) {
      setHideOptions(true);
    }
  }, [timeLeft, hideOptions]);

  useEffect(() => {
    if(!startCounting) {
      setTimeLeft(game.questions.questions[currentQuestion].time);
      setStartCounting(true);
    } else {
      count()
    }
  }, [startCounting, currentQuestion, game, count])

  useEffect(() => {
    // horrible hack, keep in mind
    // this waits for timeleft to be 1
    // then waits 5 seconds to display
    // the end of the game
    if (timeLeft === 1 && currentQuestion === game.questions.questions.length - 1) {
      setTimeout(() => setDisplayOutro(true), 5000);
    }    
  }, [timeLeft, currentQuestion, game])

  return (
    <div className="game-play">
      {game && (
        <div className="arena">
          {game.questions.questions.map((question, i) => (
            <div className="board-view" style={{ display: currentQuestion === i ? 'flex' : 'none' }} key={`question-${i}`}>
              {!displayOutro && (
                <div className="center">
                  <div className="timer">{timeLeft}</div>
                  <p>{question.question}</p>
                  {timeLeft === 0 && currentQuestion < game.questions.questions.length - 1 && (
                    <button className="next" onClick={handleOnNextQuestion}>Siguiente pregunta</button>
                  )}
                </div>
              )}
              {!displayOutro && question.answerOptions.map((option, j) => (
                <div className="board-option" key={`option-${j}`}>
                  <div
                    className="option-circle"
                    style={{ backgroundColor: COLORS[j] }}
                  >
                    <img
                      src={option.src}
                      alt="respuesta"
                      style={{
                        opacity: hideOptions && !option.correctAnswer ? 0 : 1,
                      }}
                    />
                  </div>
                </div>
              ))}
              {displayOutro && <Outro history={history} startOver={startOver} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GamePlay;
