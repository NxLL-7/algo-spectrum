import React from "react";
import Title from "../Heading/Title/Title";
import { homeAbout } from "../../dummydata";
import "./about.css";

function AboutCard() {
  return (
    <>
      <secion className="aboutHome">
        <div className="container FlexSB bP">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item FlexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </secion>
    </>
  );
}

export default AboutCard;
