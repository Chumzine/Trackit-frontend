import style from "./footer.module.css";
import CustomButton from "../../CustomButton/CustomButton";
import logosvg from "../../../assets/icons/logo.svg.svg";

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
export const Footer = () => {
  return (
    <div className={style.containerDiv}>
      <div className={style.footerContainer}>
        <div className={style.logoContainer}>
          <img src={logosvg} />
        </div>
        <div className={style.contact}>
          <h6>Contact us</h6>
          <p>
            <IoCallOutline /> +1-234-5675-57 <br />
            <MdOutlineMailOutline /> Info@trackit.com
          </p>
        </div>
        <div className={style.company}>
          <h6>COMPANY</h6>
          <ul>
            <li>
              <a href="#">Ride with us</a>
            </li>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className={style.getUpdate}>
          <form>
            <p>Get updates on offer</p>
            <label>Full name</label>
            <input />
            <label>Email adress</label>
            <input />
            <CustomButton className={style.button}>
              Be the first to know
            </CustomButton>
          </form>
        </div>
      </div>
      <div className={style.icon}>
        <div>
          <FaInstagram />
        </div>
        <div>
          <FiTwitter />
        </div>
        <div>
          <SlSocialFacebook />
        </div>
      </div>
    </div>
  );
};
