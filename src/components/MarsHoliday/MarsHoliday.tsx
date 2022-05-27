import { TicketComponent } from "../TicketComponent/TicketComponent";
import "./MarsHoliday.scss";

export function MarsHoliday() {
  return (
    <div>
      <h1 className="header">Would you dare to go to Mars?</h1>
      <TicketComponent />
    </div>
  );
}
