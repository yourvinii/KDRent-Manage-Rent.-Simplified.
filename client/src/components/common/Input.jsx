import React from "react";

const Input = ({
  type = "text",
  label,
  name,
  value,
  placeholder,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onchange}
        className={
          `
          border
          
          border-gray-300
          rounded-lg
          px-4
          py-3
          outline-none
          focus:border-black
        
          
          `
        }
      />
    </div>
  );
};

export default Input;
