
const Button = ({ variations, text, icon, addClass, iconSize }) => {
  return (
    <button type="button" className={`btn-base ${variations} ${addClass} flex`}>
      {icon && <img src={icon} className={`${iconSize}`} alt="button icon"/>} {text}
    </button>
  );
};

export default Button;
