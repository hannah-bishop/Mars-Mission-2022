import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEarthAmericas,
  faUserAstronaut,
  faRocket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./Menu.scss";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dropdown-menu">
      {isOpen ? (
        <div onClick={() => setIsOpen(false)} className="menu-screen">
          <FontAwesomeIcon icon={faBars} className="menu-button" size="2x" />
          <ul>
            <Link to="/" className="menu-link">
              <li className="menu-list-item">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  size="3x"
                  className="menu-icon"
                />
                <div className="menu-link-text">Home</div>
              </li>
            </Link>

            <Link to="/learning-space" className="menu-link">
              <li className="menu-list-item">
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  size="3x"
                  className="menu-icon"
                />
                <div className="menu-link-text">Learning Space</div>
              </li>
            </Link>

            <Link to="/mars-holiday" className="menu-link">
              <li className="menu-list-item">
                <FontAwesomeIcon
                  icon={faRocket}
                  size="3x"
                  className="menu-icon"
                />
                <div className="menu-link-text">Mars Holiday</div>
              </li>
            </Link>

            <Link to="/images" className="menu-link">
              <li className="menu-list-item">
                <FontAwesomeIcon
                  icon={faStar}
                  size="3x"
                  className="menu-icon"
                />
                <div className="menu-link-text">Mars Rover Photos</div>
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="menu-button"
          onClick={() => setIsOpen(true)}
          size="2x"
        />
      )}
    </nav>
  );
}
