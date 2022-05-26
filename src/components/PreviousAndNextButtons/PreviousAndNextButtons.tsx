import React from "react";

export function PreviousAndNextButtons(props) {
  const currentSection = props.currentSection;
  const setCurrentSection = props.setCurrentSection;
  const lengthOfArray = props.lengthOfArray;

  return (
    <>
      {currentSection !== 0 ? (
        <button onClick={() => setCurrentSection(currentSection - 1)}>
          Previous
        </button>
      ) : null}

      {currentSection !== lengthOfArray ? (
        <button onClick={() => setCurrentSection(currentSection + 1)}>
          Next
        </button>
      ) : null}
    </>
  );
}
