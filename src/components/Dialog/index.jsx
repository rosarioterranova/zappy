import { useState } from "react";
import PropTypes from "prop-types";
import style from "./Dialog.module.css";

import times from "../../assets/times.svg";

export const Dialog = ({ onCloseCallback, children }) => {
  return (
    <div className={style.container}>
      <div className={style.dialog}>
        <div className={style.header}>
          <img
            className={style.imgHeader}
            src={times}
            alt="close"
            onClick={onCloseCallback}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  onCloseCallback: PropTypes.func,
};

Dialog.defaultProps = {
  onCloseCallback: () => {},
};
