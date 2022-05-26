import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEarthAmericas, faUserAstronaut, faRocket } from "@fortawesome/free-solid-svg-icons";
import "./Menu.scss";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {isOpen ? (
        <div onClick={() => setIsOpen(false)}  className="menu-screen">
          <button>Menu</button>
          <ul>
            <Link to="/">
              <li className="menu-list-item">
                <p className="menu-link"><FontAwesomeIcon icon={faEarthAmericas} size="lg"/> Home</p>
              </li>
            </Link>

            <Link to="/learning-space">
              <li className="menu-list-item">
                <p className="menu-link"><FontAwesomeIcon icon={faUserAstronaut} size="lg"/> Learning Space</p>
              </li>
            </Link>
            <Link to="/mars-holiday">
              <li className="menu-list-item">
                <p className="menu-link"><FontAwesomeIcon icon={faRocket} size="lg"/> Mars Holiday</p>
              </li>
            </Link>
            <Link to="/images">
              <li className="menu-list-item">
                <p className="menu-link"><FontAwesomeIcon icon={faStar} size="lg"/> Mars Rover Photos</p>
              </li>
            </Link>

          </ul>
        </div>
      ) : (
        <button className="menu-button" onClick={() => setIsOpen(true)}>
          Menu
        </button>
      )}
    </nav>
  );
}
