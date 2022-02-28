import { useState } from "react";
import PropTypes from "prop-types";
import style from "./Checkbox.module.css";

export const Checkbox = ({ defaultChecked, label, labelPosition, onClick }) => {
  const [checked, setChecked] = useState(defaultChecked);

  function onClickHandler() {
    onClick(!checked);
    setChecked(!checked);
  }

  return (
    <div className={style.container}>
      {labelPosition === "left" && <p className={style.label}>{label}</p>}
      <div className={style.checkbox} onClick={onClickHandler}>
        {checked && <div className={style.marker}></div>}
      </div>
      {labelPosition === "right" && <p className={style.label}>{label}</p>}
    </div>
  );
};

Checkbox.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["none", "left", "right"]),
  onClick: PropTypes.func,
};

Checkbox.defaultProps = {
  defaultChecked: false,
  label: "Hello",
  labelPosition: "right",
  onClick: () => {},
};
