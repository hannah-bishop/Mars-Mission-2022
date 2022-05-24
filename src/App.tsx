import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss'
import { Home } from "./components/Home";
import { LearningSpace } from "./components/LearningSpace/LearningSpace";
import { Images } from "./components/Images/Images";
import { MarsHoliday } from "./components/MarsHoliday/MarsHoliday";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learning-space" element={<LearningSpace />} />
        <Route path="/images" element={<Images />} />
        <Route path="/mars-holiday" element={<MarsHoliday />} />
    </Routes>
  </Router>
  )
}

export default App
