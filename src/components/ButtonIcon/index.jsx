import PropTypes from "prop-types";
import style from "./ButtonIcon.module.css";

export const ButtonIcon = ({ label, icon, onClick }) => {
  return (
    <div className={style.container} onClick={onClick}>
      <img src={icon} alt="icon" />
      <button className={style.button}>{label}</button>
    </div>
  );
};

ButtonIcon.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonIcon.defaultProps = {
  label: "Hello",
  icon: "",
  onClick: () => {},
};
