import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Courses from "../Components/Courses/Courses";
import Sidebar from "../Components/Home/Sidebar";

const Home = () => {
  
  return (
    <div>
      {/* <h1 className="font-extrabold text-4xl pt-10 underline">Welcome to E-School</h1> */}
      <div className="sm:p-20  lg:flex">
      
      <div className="lg:w-1/4"><Sidebar/></div>
      <div className="lg:w-3/4"><Courses  /></div>
      
      
    </div>
    </div>
  );
};

export default Home;
