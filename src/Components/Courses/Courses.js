import React, { useEffect, useState } from "react";
import useCourses from "../../Hooks/useCourses";
import Course from "./Course";

const Courses = () => {
  const [courses] = useCourses();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:grid-cols-2 m-5">
      {courses.map((course, index) => (
        <Course key={index} course={course} />
      ))}
    </div>
  );
};

export default Courses;
