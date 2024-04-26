import React, { useState } from "react";
import style from "./login.module.css"; 
import CustomButton from "../../CustomButton/CustomButton";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
   try {
      // Simulating API call to authenticate user
      const response = await fetch('https://example.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Email,
          password,
        }),
      });

      const data = await response.json();

      // Check if login is successful
      if (response.ok) {
        console.log('Login successful!');
        console.log('Remember Me:', rememberMe);
      } else {
        console.error('Login failed:', data.error);
      }
    } catch (error) {
      console.error('Incorrect Username or password:', error);
    }
  
  };

  const handleForgotPassword = () => {
    const handleForgotPassword = async (email) => {
      try {
        // Send a request to your backend server to initiate the password reset process
        const response = await fetch(
          "https://your-backend-api.com/reset-password",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );

        if (response.ok) {
          // Password reset request successful
          alert("Password reset email has been sent to your email address.");
        } else {
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error:", error);
        alert(
          "An error occurred while processing your request. Please try again later."
        );
      }
    };

  };

  return (
    <div>
      <img src={Logo} alt="trackit logo" />
      <div className={style.container}>
        <h2 className={style.heading}>Log in to your account</h2>
        <form>
          <div className={style.formgroup}>
            <label className={style.label}>Email</label>
            <br />
            <input
              placeholder="Enter email"
              type="text"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={style.formgroupb}>
            <label className={style.labelpassword}>Password:</label>
            <br />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={style.forget}>
            <div className={style.formgroupc}>
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className={style.checkbox}
                />
                Remember Me
              </label>
            </div>
            <div className={style.forgotpassword}>
              <Link onClick={handleForgotPassword}>Forgot Password?</Link>
            </div>
          </div>
          <div>
            <CustomButton
              onSubmit={handleSubmit}
              className={style.primarybutton}
            >
              Log in
            </CustomButton>
          </div>
          <p className={style.para}>
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
