import React from "react";
import style from "./cancelrequest.module.css";
import { Link } from "react-router-dom";

const CancelConfirmation = ({ onCancel, onWait }) => {
  return (
    <div className={style.container}>
      <p>Are you sure?</p>
      <p>Do you want to cancel the request?</p>
      <Link to= '/cancel confirmation' className={style.cancelButton} onClick={onCancel}>
        Cancel request
      </Link>
      <Link className={style.waitButton} onClick={onWait}>
        Wait for rider
      </Link>
    </div>
  );
};

export default CancelConfirmation;
