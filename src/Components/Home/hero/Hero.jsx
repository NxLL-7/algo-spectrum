import React from "react";
import "./hero.css";
import Title from "../../Heading/Title/Title.jsx";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row blur">
            <Title
              subtitle="Welcome To"
              title="AlgoSpectrum Internship Programme"
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              minus ipsa animi iure quidem. Sapiente inventore architecto non
              hic cupiditate voluptates laudantium, ipsum, temporibus officia
              sunt nisi cum culpa similique.
            </p>
            <div className="button">
              <button className="primary-btn">
                Register Now
                <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <Link to="/courses">
                <button className="primary-btn rb">
                  All Courses
                  <i className="fa fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
