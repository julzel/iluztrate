import React, { useRef, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import QuestionAnswerOptions from "../../../components/questionAnswerOptions";

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
  question: "",
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

  const createQuestion = (finalQuestion) => {
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

  const onOptionChange = (ev, option, index) => {
    const optionImgSrc = URL.createObjectURL(ev.target.files[0]);
    option.current.src = optionImgSrc;
    option.current.style.opacity = 1;
    if (question.answerOptions[index]) {
      question.answerOptions[index].src = optionImgSrc;
    } else {
      question.answerOptions[index] = { src: optionImgSrc };
    }
    setQuestion({ ...question });
  };

  const onCorrectAnswerCheck = (ev, index) => {
    question.answerOptions.forEach((option) => (option.correctAnswer = false));
    if (question.answerOptions[index]) {
      question.answerOptions[index].correctAnswer = ev.target.checked;
    } else {
      question.answerOptions[index] = { correctAnswer: ev.target.checked };
    }
    setQuestion({ ...question });
  };

  const onTimeSelect = (selectedOption) => {
    question.time = selectedOption.value;
    setQuestion({ ...question });
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    createQuestion();
  };

  return (
    <div className="step step3">
      <form onSubmit={onFormSubmit}>
        {step === 0 && (
          <div className="step3-question">
            <textarea
              rows="5"
              type="text"
              onChange={onQuestionChange}
              value={question.question}
              placeholder={`Pregunta ${questions.length + 1}`}
            />
            <button
              className="next"
              type="button"
              onClick={() => setStep(step + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
        {step === 1 && (
          <div className="step3-options">
            <p>Agrega las opciones</p>
            <div className="step3-options-grid">
              {optionsRefs.map((option, i) => (
                <QuestionAnswerOptions
                  option={option}
                  question={question}
                  onOptionChange={onOptionChange}
                  onCorrectAnswerCheck={onCorrectAnswerCheck}
                  index={i}
                  key={`option-${i}`}
                />
              ))}
            </div>
            <button
              className="next"
              type="button"
              onClick={() => setStep(step + 1)}
            >
              Siguiente
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="step3-select">
            <p>Asígnale un tiempo máximo</p>
            <Dropdown
              controlClassName="myClassName"
              placeholderClassName="myPlaceholderClassName"
              options={options}
              onChange={onTimeSelect}
              value={defaultOption}
              placeholder="Selecciona el tiempo"
            />
            <button type="submit" className="next">
              Siguiente pregunta
            </button>
            <button
              type="button"
              className="next"
              onClick={() => createQuestion(FINAL_QUESTION)}
            >
              Finalizar
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default Step3;
