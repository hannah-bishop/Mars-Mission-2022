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
            <li>
              <Link to="/"  className="menu-list-item"><FontAwesomeIcon icon={faEarthAmericas} size="lg"/> Home</Link>
            </li>
            <li>
              <Link to="/learning-space"  className="menu-list-item"><FontAwesomeIcon icon={faUserAstronaut} size="lg"/> Learning Space</Link>
            </li>
            <li>
              <Link to="/mars-holiday"  className="menu-list-item"><FontAwesomeIcon icon={faRocket} size="lg"/> Mars Holiday</Link>
            </li>
            <li>
              <Link to="/images"  className="menu-list-item"><FontAwesomeIcon icon={faStar} size="lg"/> Mars Rover Photos</Link>
            </li>
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
