import { QuestionSection, Answer } from "../../data/dummyData";
import { useState } from "react";
import "./Question.scss";

interface QuestionProps {
  section: QuestionSection;
  onAnswerChosen: (arg0: Answer) => void;
}

export function Question(props: QuestionProps) {
  const question = props.section.questionText;
  const answers = props.section.answers;
  const [isAnswered, setIsAnswered] = useState(false);
  const [chosenAnswer, setChosenAnswer] = useState<Answer>();
  return (
    <div>
      {question}
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
            }`}
          >
            {answer.text}
          </li>
        ))}
      </ol>
    </div>
  );
}
