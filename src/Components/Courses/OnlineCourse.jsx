import React from "react";
import Back from "../Back/Back";
import CourseCard from "./CourseCard";

const OnlineCourse = () => {
  return (
    <>
      <Back
        title="Explore Courses"
        abt="Explore all our courses to find the perfect fit for your learning goals and interests. "
      />
      <CourseCard />
    </>
  );
};

export default OnlineCourse;
