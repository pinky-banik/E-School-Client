import { getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { createContext } from 'react';
import app from './../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const user = null;

  const providerLogin = (provider) =>{
    return signInWithPopup(auth,provider);
  }
  const authInfo={user};


  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;