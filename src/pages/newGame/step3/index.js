import React, { useRef, useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import ImageUploader from "../../../components/imageUploader";
import "./Step3.scss";

const FINAL_QUESTION = true;

const options = [
  { value: 15, label: "15 segundos" },
  { value: 20, label: "20 segundos" },
  { value: 30, label: "30 segundos" },
  { value: 45, label: "45 segundos" },
  { value: 60, label: "1 minuto" },
];

const defaultOption = options[0];

const newQuestionDefault = {
  question: '',
  answerOptions: [],
  time: 15,
};

const Step3 = ({ onNext }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({ ...newQuestionDefault });
  const [step, setStep] = useState(0);
  const option1Ref = useRef(null);
  const option2Ref = useRef(null);
  const option3Ref = useRef(null);
  const option4Ref = useRef(null);
  const optionsRefs = [option1Ref, option2Ref, option3Ref, option4Ref];

  const onQuestionChange = (ev) => {
    question.question = ev.target.value;
    setQuestion({ ...question });
  };

  const createQuestion = finalQuestion => {
    newQuestionDefault.answerOptions = [];
    questions.push(question);
    setQuestions([...questions]);
    setQuestion({ ...newQuestionDefault });
    setStep(0);
    onNext(
      {
        totalQuestions: questions.length,
        questions,
      },
      finalQuestion
    );
  };

  const onOptionChange = (ev, option) => {
    const optionImgSrc = URL.createObjectURL(ev.target.files[0]);
    option.current.src = optionImgSrc;
    option.current.style.opacity = 1;
    question.answerOptions.push(optionImgSrc);
    setQuestion({ ...question });
  };

  const onTimeSelect = selectedOption => {
    question.time = selectedOption.value;
    setQuestion({ ...question });
  }

  const onFormSubmit = ev => {
    ev.preventDefault();
    createQuestion();
  }

  useEffect(() => console.log(question), [question])


  return (
    <div className="step step3">
      <form onSubmit={onFormSubmit}>
        {step === 0 && <div className="step3-question">
          <textarea
            rows="5"
            type="text"
            onChange={onQuestionChange}
            value={question.question}
            placeholder={`Pregunta ${questions.length + 1}`}
          />
          <button className="next" type="button" onClick={() => setStep(step + 1)}>Siguiente</button>
        </div>}
        {step === 1 && <div className="step3-options">
          <p>Agrega las opciones</p>
          <div>
            {optionsRefs.map((option, i) => (
              <div className={`option option-${i}`} key={`option${i}`}>
                <ImageUploader
                  id={`option${i}`}
                  onFileUpload={(ev) => onOptionChange(ev, option)}
                />
                <i className="fa fa-image" />
                <img
                  src={null}
                  alt={`respuesta ${i + 1}`}
                  ref={option}
                  style={{ opacity: 0 }}
                />
              </div>
            ))}
          </div>
          <button className="next" type="button" onClick={() => setStep(step + 1)}>Siguiente</button>
        </div>}
        {step === 2 && <div className="step3-select">
          <p>Asígnale un tiempo máximo</p>
          <Dropdown
            controlClassName='myClassName'
            placeholderClassName='myPlaceholderClassName'
            options={options}
            onChange={onTimeSelect}
            value={defaultOption}
            placeholder="Selecciona el tiempo"
          />
          <button className="next" type="button" onClick={() => setStep(step + 1)}>Siguiente</button>
        </div>}
        {step === 3 && <div className="step3-confirm">
          <button type="submit" className="next">Siguiente pregunta</button>
          <button
            type="button"
            className="next"
            onClick={() => createQuestion(FINAL_QUESTION)}
          >
            Finalizar
          </button>
        </div>}
      </form>
      {/* <div className="all-questions">
        <ul>
          {questions.map((q) => (
            <li>{q.question}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Step3;
