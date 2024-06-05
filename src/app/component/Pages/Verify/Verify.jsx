import React, { useState } from "react";
import style from "./verify.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import Logo from "../../../assets/images/logo.png";

const VerifyWithOTP = () => {
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(false);

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      setVerified(true);
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className={style.container}>
      <img src={Logo} alt="trackit logo" />
      <div>
        <div className={style.title}>
          <h1 className={style.heading}>Verify</h1>
          <p className={style.topic}>
            Please enter the OTP sent to your phone number
          </p>
          <span className={style.span}>08123456789</span>
          <p className={style.paragraph}>Resend OTP Code</p>
        </div>
        {!verified ? (
          <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
            <div className={style['otp-container']}>
              <label className={style.otp}>OTP Code</label>
              <input
                className={style.box}
                placeholder="Code"
                type="text"
                value={otp}
                onChange={handleChange}
                maxLength="4"
              />
            </div>
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
