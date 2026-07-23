import React from "react";

const Button = ({ text, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onclick}
      className={`
  bg-black
  text-white
  px-4
  py-3
  w-auto
  rounded-lg
  hover:bg-gray-800
  transition
  duration-300
  ${className}
  `}
    >
      {text}
    </button>
  );
};

export default Button;
