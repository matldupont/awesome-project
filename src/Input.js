import React from "react";

const Input = ({ value, onChange }) => {
  const changeHandler = e => {
    const { value } = e.target;
    onChange(value);
  };

  return <input type="input" onChange={changeHandler} value={value} />;
};

export default Input;
