import React from "react";
import "./Button.css"
export const Button = ({ callApi }) => { 
    const handleClick = () => {
      callApi(); 
    };
  
    return (
      <button onClick={handleClick}>
        Tell me a joke
      </button>
    );
  };
  