import { Question } from "../Question/Question";
import { learningPageData } from "../../data/data";
import { useState } from "react";
import { PreviousAndNextButtons } from "../PreviousAndNextButtons/PreviousAndNextButtons";
import "./LearningSpace.scss";

export function LearningSpace() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  return (
    <div className="learning-space">
      <h1 className="page-title title">Welcome to the Learning Space!</h1>
      <h2 className="section-title title">
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
