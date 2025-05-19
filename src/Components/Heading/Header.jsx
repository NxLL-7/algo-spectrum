import React, { useState } from "react";
import Head from "./Head.jsx";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className="FlexSB">
          <ul
            className={click ? "mobile-nav" : "FlexSB"}
            onClick={() => setClick(false)}
          >
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="start" id="gtBtn">
            <div className="button">GET CERIFICATION</div>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {" "}
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}{" "}
          </button>
        </nav>
      </header>
    </>
  );
};
