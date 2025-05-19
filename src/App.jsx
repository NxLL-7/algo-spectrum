import React from "react";
import { Header } from "./Components/Heading/Header.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home.jsx";
import { About } from "./Components/About/About.jsx";
import OnlineCourse from "./Components/Courses/OnlineCourse.jsx";
import Contact from "./Components/Contact/Contact.jsx";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<OnlineCourse />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
