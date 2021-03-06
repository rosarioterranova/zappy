import React from "react";
import style from "./Spinner.module.css";
import pulse from "../../assets/pulse.svg";

export const Spinner = () => {
  return (
    <div className={style.spinnerContainer}>
      <img className={style.spinner} src={pulse} alt="Loading" />
    </div>
  );
};
