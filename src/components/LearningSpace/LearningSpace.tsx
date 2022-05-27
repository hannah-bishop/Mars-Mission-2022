import { Question } from "../Question/Question";
import { learningPageData } from "../../data/data";
import { useState } from "react";
import { PreviousAndNextButtons } from "../PreviousAndNextButtons/PreviousAndNextButtons";

export function LearningSpace() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div className="LearningSpace">
      <h1 className="page-title">Welcome to a Learning Space!</h1>
      <h2 className="section-title">
        {learningPageData[currentSection].title}
      </h2>
      <img
        className="image"
        src={learningPageData[currentSection].content.imageUrl}
      />
      <p className="text">{learningPageData[currentSection].content.text}</p>
      <Question
        isAnswered={isAnswered}
        setIsAnswered={setIsAnswered}
        section={learningPageData[currentSection].questionSection}
        onAnswerChosen={console.log}
      />

      <PreviousAndNextButtons
        isAnswered={isAnswered}
        setIsAnswered={setIsAnswered}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        lastPageIndex={learningPageData.length - 1}
      />
    </div>
  );
}
