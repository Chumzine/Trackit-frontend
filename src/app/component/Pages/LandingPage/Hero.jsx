import style from "./style.module.css";
import { Link } from "react-router-dom";
import logosvg from "../../../assets/icons/logo.svg.svg";
import heroLady from "../../../assets/icons/heroLady.svg";
import CustomButton from "../../CustomButton/CustomButton";
import { Features } from "./Features";
import { EarnOption } from "./Earn";
import { Testimonial } from "./Testimonial";
import { Footer } from "./Footer";

export const HeroSection = () => {
  return (
    <div>
      <div className={style.header}>
        <div>
          <img src={logosvg} />
        </div>
        <div>
          <nav className={style.navigation}>
            <Link to="/home">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Sign in</Link>
            <Link to  ="/signup"className={style.createAccount}>
              Create an account
            </Link>
          </nav>
        </div>
      </div>
      <div className={style.heroContainer}>
        <div className={style.heroLeft}>
          <h1 className={style.title}>
            Experience hassle-free <br /> package delivery with <br /> our
            trusted brand.
          </h1>
          <p className={style.para}>
            Skilled riders, Real time tracking, Secured payment system.
          </p>
          <CustomButton className={style.button}>
            Let's help you deliver
          </CustomButton>
        </div>
        <div>
          <img className={style.ladyimage} src={heroLady} />
        </div>
      </div>
      <Features />
      <EarnOption />
      <Testimonial />
      <Footer />
    </div>
  );
};