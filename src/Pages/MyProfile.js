import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const MyProfile = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="p-20 mb-20 text-start lg:w-3/4 mx-auto flex-col justify-center items-center flex">
      <img src={user?.photoURL} alt="" />
      <h1 className="p-5 font-extrabold text-primary text-3xl">{user?.displayName}</h1>
      <p className="text-lg pt-5 mt-5"><span className="font-bold text-primary ">Email : </span> {user?.email}</p>
      
      
          
    </div>
  );
};

export default MyProfile;