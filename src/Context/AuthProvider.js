import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup ,updateProfile} from 'firebase/auth';
import React, { useState } from 'react';
import { createContext, useEffect } from 'react';
import Loading from '../Components/Shared/Loading';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();
export const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);
 
  const providerLogin = (provider) =>{
    return signInWithPopup(auth,provider);
  }

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const updateUser = (displayName,photoUrl) =>{
    return updateProfile(auth.currentUser, displayName ,photoUrl);
  }

  const signin =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      console.log(currentUser);
    });
    return () =>{
      unsubscribe();
    }
  },[user]);

  if(loading){
    return <Loading/>
  }



  const authInfo={user,providerLogin,createUser,updateUser,signin};


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;