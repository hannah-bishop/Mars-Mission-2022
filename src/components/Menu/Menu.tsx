import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  if (isOpen) {
    return (
      <nav onClick={() => setIsOpen(false)}>
        <button>Menu</button>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/learning-space">Learning Space</Link>
          </li>
          <li>
            <Link to="/mars-holiday">Mars Holiday</Link>
          </li>
          <li>
            <Link to="/images">Mars Rover Photos</Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <button className="menu-button" onClick={() => setIsOpen(true)}>
        Menu
      </button>
    );
  }
}
