import "./Home.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserAstronaut, faRocket } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <main className="home">
      <h1>Welcome to Mars Mission!</h1>
      <p>Welcome, dear guest, to Mars Mission!</p>
      <img src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png" />
      <div className="navigation-grid">
        <Link to="/learning-space">
          <div className="learning-space-tile"><FontAwesomeIcon icon={faUserAstronaut} /> Learning Space</div>
        </Link>
        <Link to="/mars-holiday">
          <div className="mars-holiday-tile"><FontAwesomeIcon icon={faRocket} /> Mars Holiday</div>
        </Link>
        <Link to="/images" className="photos-rover-tile">
          <div><FontAwesomeIcon icon={faStar} /> Mars Rover Photos</div>
        </Link>
      </div>
    </main>
  );
}
