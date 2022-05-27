import { QuestionSection, Answer } from "../../data/data";
import { useState } from "react";
import "./Question.scss";

interface QuestionProps {
  section: QuestionSection;
  onAnswerChosen: (arg0: Answer) => void;
  isAnswered: boolean;
  setIsAnswered: (arg0: boolean) => void;
}

export function Question(props: QuestionProps) {
  const question = props.section.questionText;
  const answers = props.section.answers;
  const isAnswered = props.isAnswered;
  const setIsAnswered = props.setIsAnswered;
  const [chosenAnswer, setChosenAnswer] = useState<Answer>();
  return (
    <div className = "question-component">
      <p className = "question">{question}</p>
      <ol>
        {answers.map((answer) => (
          <li
            onClick={() => {
              if (isAnswered) {
                return;
              }
              setIsAnswered(true);
              setChosenAnswer(answer);
              props.onAnswerChosen(answer);
            }}
            className={`${
              !isAnswered
                ? ""
                : answer.isCorrect
                ? "correct-answer"
                : chosenAnswer?.text === answer.text
                ? "wrong-answer"
                : ""
            } answer`}
          >
            {answer.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
