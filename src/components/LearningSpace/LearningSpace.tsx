import { Question } from "../Question/Question";
import { learningPageData } from "../../data/data";
import { useState } from "react";
import { PreviousAndNextButtons } from "../PreviousAndNextButtons/PreviousAndNextButtons";

export function LearningSpace() {
  const [currentSection, setCurrentSection] = useState(0);
  return (
    <>
      <h1>Welcome to a Learning Space!</h1>
      <h2>{learningPageData[currentSection].title}</h2>
      <img src={learningPageData[currentSection].content.imageUrl} />
      <p>{learningPageData[currentSection].content.text}</p>
      <Question
        section={learningPageData[currentSection].questionSection}
        onAnswerChosen={console.log}
      />

      <PreviousAndNextButtons
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        lengthOfArray={learningPageData.length - 1}
      />
    </>
  );
}
