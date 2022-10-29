import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Components/Courses/Courses";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://eschool-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div>
      <Courses courses={courses} />
    </div>
  );
};

export default Home;
