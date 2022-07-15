import React from "react";
import "./styles.scss";

const Button = ({
  buttonText = "default text",
  link = "",
  style,
  clickEvent,
  additionalClassNames = "",
}) => {
  return (
    <button className={`button ${additionalClassNames}`} onClick={clickEvent}>
      {buttonText}
    </button>
  );
};

export default Button;
