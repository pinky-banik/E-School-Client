import React from "react";
import "./button.css";
import {FaSun,FaMoon} from 'react-icons/fa';

const ToggoleButton = () => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label htmlFor="checkbox" className="labelfortoggle">
        <FaMoon className="text-pink-300"/>
        <FaSun className="text-yellow-300"/>
        
        <div className="ball" />
      </label>
    </div>
  );
};

export default ToggoleButton;
