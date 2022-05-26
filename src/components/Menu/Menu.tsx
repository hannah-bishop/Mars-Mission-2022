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
        <div onClick={() => setIsOpen(false)} className="dropdown-menu__screen">
          <FontAwesomeIcon
            icon={faBars}
            className="dropdown-menu__button"
            size="2x"
          />
          <ul>
            <Link to="/" className="dropdown-menu__link">
              <li className="dropdown-menu__list-item">
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  size="3x"
                  className="dropdown-menu__icon"
                />
                <div className="dropdown-menu__link-text">Home</div>
              </li>
            </Link>

            <Link to="/learning-space" className="dropdown-menu__link">
              <li className="dropdown-menu__list-item">
                <FontAwesomeIcon
                  icon={faUserAstronaut}
                  size="3x"
                  className="dropdown-menu__icon"
                />
                <div className="dropdown-menu__link-text">Learning Space</div>
              </li>
            </Link>

            <Link to="/mars-holiday" className="dropdown-menu__link">
              <li className="dropdown-menu__list-item">
                <FontAwesomeIcon
                  icon={faRocket}
                  size="3x"
                  className="dropdown-menu__icon"
                />
                <div className="dropdown-menu__link-text">Mars Holiday</div>
              </li>
            </Link>

            <Link to="/images" className="dropdown-menu__link">
              <li className="dropdown-menu__list-item">
                <FontAwesomeIcon
                  icon={faStar}
                  size="3x"
                  className="dropdown-menu__icon"
                />
                <div className="dropdown-menu__link-text">
                  Mars Rover Photos
                </div>
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className="dropdown-menu__button"
          onClick={() => setIsOpen(true)}
          size="2x"
        />
      )}
    </nav>
  );
}
