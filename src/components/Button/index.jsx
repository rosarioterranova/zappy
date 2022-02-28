import PropTypes from 'prop-types';
import style from "./Button.module.css"

export const Button = ({ label, onClick}) => {
  return (
  <div className={style.container}>
      <button className={style.button}>{label}</button>
  </div>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  label: "Hello",
  onClick: () => {},
};
