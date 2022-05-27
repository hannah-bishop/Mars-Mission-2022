import "./Home.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faUserAstronaut,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <main className="home">
      <h1>Welcome to Mars Mission!</h1>
      <p>Welcome, dear guest, to Mars Mission!</p>
      <img src="https://www.solarsystemscope.com/spacepedia/images/handbook/renders/mars.png" />

      <div className="navigation-grid">
        <Link to="/learning-space" className="grid-link">
          <div className="grid-text">
            <FontAwesomeIcon icon={faUserAstronaut} className="grid-icon" />
            Learning Space
          </div>
        </Link>
        <Link to="/mars-holiday" className="grid-link">
          <div className="grid-text">
            <FontAwesomeIcon icon={faRocket} className="grid-icon" />
            Mars Holiday
          </div>
        </Link>
        <Link to="/images" className="grid-span grid-link">
          <div className="grid-text">
            <FontAwesomeIcon icon={faStar} className="grid-icon" />
            Mars Rover Photos
          </div>
        </Link>
      </div>
    </main>
  );
}
