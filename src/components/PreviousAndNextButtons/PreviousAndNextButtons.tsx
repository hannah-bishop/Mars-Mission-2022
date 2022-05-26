import React from "react";
interface PreviousAndNextprops {
  currentSection: number;
  setCurrentSection: (arg0: number) => void;
  lastPageIndex: number;
  isAnswered: boolean;
  setIsAnswered: (arg0: boolean) => void;
}

export function PreviousAndNextButtons(props: PreviousAndNextprops) {
  const currentSection = props.currentSection;
  const setCurrentSection = props.setCurrentSection;
  const lastPageIndex = props.lastPageIndex;
  const setIsAnswered = props.setIsAnswered;

  return (
    <>
      {currentSection !== 0 ? (
        <button
          onClick={() => {
            setCurrentSection(currentSection - 1);
            setIsAnswered(false);
          }}
        >
          Previous
        </button>
      ) : null}

      {currentSection !== lastPageIndex ? (
        <button
          onClick={() => {
            setCurrentSection(currentSection + 1);
            setIsAnswered(false);
          }}
        >
          Next
        </button>
      ) : null}
    </>
  );
}
