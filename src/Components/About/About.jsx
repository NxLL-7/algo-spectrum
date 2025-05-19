import React from "react";
import Back from "../Back/Back.jsx";
import AboutCard from "./AboutCard.jsx";

export const About = () => {
  return (
    <>
      <Back
        title="About Us"
        abt="Learn more about us and our mission to make quality education accessible to everyone, everywhere."
      />
      <AboutCard />
    </>
  );
};

export default About;
