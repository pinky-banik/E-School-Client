import React from 'react';
import useCourses from './../../Hooks/useCourses';
import {FaHandPointRight} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [courses] = useCourses();
  return (
    <div className='shadow-lg rounded m-5'>
      <h1 className='text-2xl font-extrabold text-primary pt-5 text-center'>Course Titles</h1>
      <div className='text-start p-5'>
      {
        courses.map((course,index) => <Link to={`/coursedetails/${course.id}` } key={index}>
        <p className='font-bold my-2 text-blue-700 hover:underline' >
          * {course.title}
        </p></Link> )
      }
      </div>
    </div>
  );
};

export default Sidebar;