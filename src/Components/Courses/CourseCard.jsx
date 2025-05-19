import React from "react";
import { coursesCard } from "../../dummydata";
import "./course.css";

const CourseCard = () => {
  return (
    <>
      <section className="courseCard">
        <div className="container grid2">
          {coursesCard.map((val) => {
            return (
              <div className="items">
                <div className="content flex">
                  <div className="left">
                    <h1>{val.coursesName}</h1>
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text"></div>
                  <div className="details">
                    {val.courTeacher.map((details) => (
                      <>
                        <div className="box">
                          <div className="dimg">
                            <img src={details.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{details.name}</h4>
                          </div>
                        </div>
                        <span>{details.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
                <div className="price">
                  <h3>{val.priceAll}</h3>
                </div>
                <button className="outline-btn">
                  <a href="" target="_blank">
                    Enroll Now !!
                  </a>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CourseCard;
