import React from "react";

const Button = ({ variations, text, icon, addClass, iconSize }) => {
  return (
    <button type="button" className={`btn-base ${variations} ${addClass}`}>
      {icon && <img src={icon} className={iconSize}/>} {text}
    </button>
  );
};

export default Button;
