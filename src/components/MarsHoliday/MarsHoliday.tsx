import { PreviousButton } from "../PreviousNextButtons/PreviousButton";
import { NextButton } from "../PreviousNextButtons/NextButton";

export function MarsHoliday() {
  return (
    <div>
      {<PreviousButton />}
      {<NextButton />}
      <h1>Would you dare to go to Mars?</h1>
    </div>
  );
}
