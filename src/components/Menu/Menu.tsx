import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <>
        <button className="menu-button" onClick={() => setIsOpen(false)}>
          Menu
        </button>
        <nav className="navigation-bar">
          <p>Menu Options</p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/LearningSpace">Learning Space</Link>
            </li>
            <li>
              <Link to="/MarsHoliday">Mars Holiday</Link>
            </li>
            <li>
              <Link to="/MarsRoverPhotos">Mars Rover Photos</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <button className="menu-button" onClick={() => setIsOpen(true)}>
        Menu
      </button>
    );
  }
}
