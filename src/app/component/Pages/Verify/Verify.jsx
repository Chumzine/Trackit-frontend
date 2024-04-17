import style from "./verify.module.css"
// import { BsArrowLeft } from "react-icons/bs";
import  CustomButton  from "../../CustomButton/CustomButton";
import Logo from "../../../assets/images/logo.png"

import React, { useState } from "react";

const VerifyWithOTP = () => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically make a request to your backend to verify the OTP
    // For the sake of simplicity, let's assume OTP is "1234"
    if (otp === "1234") {
      setVerified(true);
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div>
      <img src={Logo} alt="trackit logo" />
      <div>
        <div className={style.title}>
          <h1 className={style.heading}>Verify</h1>
          <p className={style.topic}>
            Verify Please enter the OTP sent to your phone number
          </p>
          <span className={style.span}>O8123456789</span>
          <p className={style.paragraph}>Resend OTP Code</p>
        </div>
        {!verified ? (
          <form onSubmit={handleSubmit}>
            <label className={style.label}>OTP Code: </label>
            <input
              className={style.box}
              placeholder="Code"
              type="text"
              value={otp}
              onChange={handleChange}
              maxLength="4"
            />

            <CustomButton className={style.primarybutton}>
              Verify Code
            </CustomButton>
            <p className={style.para}>
              Incorrect phone number? <a href="!#">Update it</a>
            </p>
          </form>
        ) : (
          <p className={style.para}>
            Incorrect phone number? <a href="!#">Update it</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default VerifyWithOTP;





