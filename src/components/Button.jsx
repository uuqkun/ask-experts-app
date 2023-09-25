import React from "react";

const Button = ({ variations, text }) => {
  return (
    <button type="button" className={`btn-base ${variations}`}>
      {text}
    </button>
  );
};

export default Button;
