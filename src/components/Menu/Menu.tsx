import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEarthAmericas, faUserAstronaut, faRocket } from "@fortawesome/free-solid-svg-icons";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {isOpen ? (
        <div onClick={() => setIsOpen(false)}>
          <button>Menu</button>
          <ul>
            <li>
              <Link to="/"><FontAwesomeIcon icon={faEarthAmericas} size="lg"/> Home</Link>
            </li>
            <li>
              <Link to="/learning-space"><FontAwesomeIcon icon={faUserAstronaut} size="lg"/> Learning Space</Link>
            </li>
            <li>
              <Link to="/mars-holiday"><FontAwesomeIcon icon={faRocket} size="lg"/> Mars Holiday</Link>
            </li>
            <li>
              <Link to="/images"><FontAwesomeIcon icon={faStar} size="lg"/> Mars Rover Photos</Link>
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
