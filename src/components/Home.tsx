import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <main className="home">
      <h1>Welcome to Mars Mission!</h1>
      <p>Welcome, dear guest, to Mars Mission!</p>
      <img src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png" />
      <FontAwesomeIcon icon={faStar} size="6x" spin />
      <div className="navigation-grid">
        <div className="learning-space-tile"> Learning Space </div>
        <div className="mars-holiday-tile"> Mars Holiday </div>
        <div className="photos-rover-tile"> Mars Rover Photos</div>
      </div>
    </main>
  );
}
