import React from "react";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="  flex flex-col gap-2 ">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="
        border
        border-gray-300
        rounded-lg
        px-4
        py-3
        outline-none
        focus:border-black
        "
      />
    </div>
  );
};

export default Input;
