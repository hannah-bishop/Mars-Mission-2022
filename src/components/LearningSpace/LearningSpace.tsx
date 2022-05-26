import { Question } from "../Question/Question";
import { learningPageData } from "../../data/data";

export function LearningSpace() {
  return (
    <>
      <h1>Welcome to a Learning Space!</h1>
      <h2>{learningPageData[0].title}</h2>
      <img src={learningPageData[0].content.imageUrl} />
      <p>{learningPageData[0].content.text}</p>
      <Question
        section={learningPageData[0].questionSection}
        onAnswerChosen={console.log}
      />
    </>
  );
}
