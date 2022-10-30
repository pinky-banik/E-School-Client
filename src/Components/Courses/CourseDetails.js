import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    fetch(`https://eschool-server.vercel.app/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
        setLoading(false);
      });
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div  className="p-20 mb-20 text-start lg:w-3/4 mx-auto flex-col justify-center items-center flex">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className="py-3 btn btn-secondary m-3" onClick={toPdf}>Download as PDF</button>}
      </Pdf>
      <div ref={ref}>
      <img src={img} alt="" />
      
      <h1 className="p-5 font-extrabold text-primary text-3xl">{title}</h1>
      <p className="text-lg pt-5 mt-5"><span className="font-bold text-primary ">Description : </span> {desc}</p>
      
      <div className="flex items-center  mt-2.5 mb-5 font-bold">
      
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
          <h1 className="text-3xl font-extrabold"><span className="text-primary text-2xl font-bold">Price :</span> ${price}</h1>
          <div className="w-full my-5 border-2 rounded p-5 border-primary">
            <h1 className="text-center text-2xl font-extrabold text-primary">Seller 
            Details</h1>
            <div className="flex justify-center items-center">
              <div className=" flex flex-col justify-center items-center">
              <img className="rounded-full w-24 my-5" src={sellerThumb } alt="" />
              <h1 className="text-xl font-extrabold text-primary ">Provider : <span className="text-black">{provider}</span></h1>
              </div>
              
            </div>
            
          </div>
          <Link className="btn btn-primary text-white w-full py-2 " to="/payment">Get Premium Access</Link>
      </div>
    </div>
  );
};

export default CourseDetails;
