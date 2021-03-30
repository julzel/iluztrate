import React from 'react';
import ImageUploader from '../imageUploader';

import './QuestionAnswerOptions.scss'

const QuestionAnswerOptions = ({
  question,
  option,
  onOptionChange,
  onCorrectAnswerCheck,
  index,
}) => {
  const isValid = question.answerOptions[index];
  const isTheCorrectAnswer = isValid?.correctAnswer;
  return (
    <div className={`option${isTheCorrectAnswer ? ' selected' : ''}`}>
      <i className="fa fa-image" />
      <img
        src={null}
        alt={`respuesta ${index + 1}`}
        ref={option}
        style={{ opacity: 0 }}
      />
      <ImageUploader
        id={`option-image${index}`}
        onFileUpload={(ev) => onOptionChange(ev, option, index)}
      />
      <input
        id={`option-correct-${index}`}
        type="radio"
        name="correct-answer"
        value={question.correctAnswer}
        onChange={(ev) => onCorrectAnswerCheck(ev, index)}
      />
      <label
        htmlFor={`option-correct-${index}`}
        className={`radiobutton${isTheCorrectAnswer ? ' selected' : ''}`}
      >
        <i className="fa fa-check" />
      </label>
    </div>
  );
};

export default QuestionAnswerOptions;
