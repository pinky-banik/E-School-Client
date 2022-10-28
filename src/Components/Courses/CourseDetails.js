import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const CourseDetails = () => {
  const {courseId} = useParams();
  const [course,setCourse] = useState({});
  const [loading,setLoading] = useState(false);

  const {id,
    img,
    title,
    desc,
    price,
    provider,
    rating,
    ratingcount,
    sellerThumb} = course;

  useEffect(()=>{
    fetch(`http://localhost:5000/courses/${courseId}`)
    .then(res=>res.json())
    .then(data=>{
      setCourse(data);
      setLoading(false);
    })
  },[courseId]);

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="p-8 rounded-t-lg" src={img} alt="product image" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            {rating}
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;