import { QuestionSection } from "../../data/data";
import { Question } from "../Question/Question";

const questionSection: QuestionSection = {
  questionText: "Question 1",
  answers: [
    {
      text: "a",
      isCorrect: true,
    },
    {
      text: "b",
      isCorrect: false,
    },
    {
      text: "c",
      isCorrect: false,
    },
    {
      text: "d",
      isCorrect: false,
    },
  ],
};
export function LearningSpace() {
  return (
    <>
      <h1>Welcome to a Learning Space!</h1>
      <Question section={questionSection} onAnswerChosen={console.log} />
    </>
  );
}
