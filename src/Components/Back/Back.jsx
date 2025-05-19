import React from "react";
import { useLocation } from "react-router-dom";
const Back = ({ title, abt }) => {
  const location = useLocation();
  return (
    <>
      <section className="back">
        <div className="blur">
          <h2>Home / {location.pathname.split("/")[1]}</h2>
          <h1>{title}</h1>
          <p>{abt}</p>
        </div>
      </section>
      <div className="marigin blur"></div>
    </>
  );
};
export default Back;
