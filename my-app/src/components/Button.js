import React from "react";
import "./button.css";

const Button = ({ children, fill = true, ...props }) => {
  return (
    <button className={fill ? "button-fill" : "button-outline"} {...props}>
      {children}
    </button>
  );
};

export default Button;
