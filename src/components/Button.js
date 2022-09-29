import React from "react";
import "./components.scss";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.handleClick}>
      {props.label}
    </button>
  );
};

export default Button;
