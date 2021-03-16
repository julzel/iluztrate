import React, { useRef, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import ImageUploader from "../../../components/imageUploader";

const options = [
  { value: 15, label: '15 segundos' },
  { value: 20, label: '20 segundos' },
  { value: 30, label: '30 segundos' },
  { value: 45, label: '45 segundos' },
  { value: 60, label: '1 minuto' }
]
const defaultOption = options[0];

const Step3 = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const option1Ref = useRef(null);
  const option2Ref = useRef(null);
  const option3Ref = useRef(null);
  const option4Ref = useRef(null);
  const optionsRefs = [option1Ref, option2Ref, option3Ref, option4Ref];

  const onQuestionChange = () => {};

  const createQuestion = () => {};
  const onOptionChange = (ev, option) => {
    const optionImgSrc = URL.createObjectURL(ev.target.files[0]);
    option.current.src = optionImgSrc;
    option.current.style.opacity = 1;
  };

  const onTimeSelect = ev => console.log(ev)

  return (
    <div className="step3">
      <form onSubmit={createQuestion}>
        <div className="form-block-question">
          <label htmlFor="gameCategory">Pregunta {questions.length + 1}</label>
          <input
            type="text"
            onChange={onQuestionChange}
            value={question.question}
            placeholder="crea tu pregunta"
          />
          <button type="button" className="next" onClick={createQuestion}>
            Siguiente
          </button>
        </div>
        <div className="form-block-options">
          {optionsRefs.map((option, i) => (
            <div className={`option option-${i}`} key={`option${i}`}>
              <ImageUploader
                id={`option${i}`}
                onFileUpload={(ev) => onOptionChange(ev, option)}
              />
              <img
                src={null}
                alt={`respuesta ${i + 1}`}
                ref={option}
                style={{ opacity: 0 }}
              />
            </div>
          ))}
        </div>
        <div className="form-block-select">
          <Dropdown options={options} onChange={onTimeSelect} value={defaultOption} placeholder="Select an option" />
        </div>
        <div className="form-block-confirm">
          <button type="submit">Guardar</button>
        </div>
      </form>
      <div className="all-questions">
        <ul>
          {questions.map((q) => (
            <li>{q.question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Step3;
