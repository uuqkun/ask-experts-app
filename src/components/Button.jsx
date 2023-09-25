import React from "react";

const Button = ({ variations, text, icon, addClass }) => {
  return (
    <button type="button" className={`btn-base ${variations} ${addClass}`}>
      {icon && <img src={icon} />} {text}
    </button>
  );
};

export default Button;
