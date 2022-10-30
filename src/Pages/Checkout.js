import React from 'react';
import { useEffect } from 'react';
import { runFireworks } from '../Components/Shared/Confetti';
import success from "../assets/success.jpg";
import { Link } from 'react-router-dom';

const Checkout = () => {

  useEffect(()=>{
    runFireworks();
},[])
  return (
    <div className='flex-col flex justify-center items-center h-screen py-20'>
      <h1 className='text-4xl font-bold text-extrabold! text-center p-5'>Hurray!!! Checkout Success</h1>
      <img className='w-96' src={success} alt="error" />
      <Link to="/"><button className='btn btn-primary text-white font-bold'>Go To Home</button></Link>
    </div>
  );
};

export default Checkout;