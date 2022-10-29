import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../Context/AuthProvider';
 
 
const RequireAuth = ({children}) => {
    const {user} = useContext(AuthContext);
    let location = useLocation();
 
 
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace  />;
      }
 
    return children;
};
 
export default RequireAuth;
