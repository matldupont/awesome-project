import React from "react";

const Button = props => {
  const clickHandler = e => {
    e.preventDefault();
    props.onButtonClick();
  };

  return (
    <button type="button" onClick={clickHandler}>
      {props.title}
    </button>
  );
};

export default Button;
