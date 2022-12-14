import React from "react";
import {useNavigate}  from "react-router-dom";
import Rating from 'react-rating';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

const Course = ({ course }) => {
  const navigate = useNavigate();
  const {
    id,
    img,
    title,
    desc,
    price,
    provider,
    rating,
    ratingCount,
    sellerThumb,
  } = course;
  return (
    <div>
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="p-8 rounded-t-lg" src={img} alt="product image" />
        <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          <div className="flex items-center mt-2.5 mb-5">
          <Rating className="text-2xl text-yellow-300"
                    initialRating={rating}
                    readonly
                    emptySymbol={
                      <AiOutlineStar />
                    }
                    fullSymbol={
                      <AiFillStar/>
                    }
                  />

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating} 
            </span>
            ({ratingCount})
            
          </div>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <button onClick={()=>navigate(`/courseDetails/${id}`)}
              
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
