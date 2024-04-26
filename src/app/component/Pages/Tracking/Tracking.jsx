import Logo from "../../../assets/images/logo.png";
import style from "./tracking.module.css";
import logosvg from "../../../assets/icons/logo.svg.svg";
import trackingImage from "../../../assets/icons/trackingImage.svg";
import locationframe from "../../../assets/icons/locationframe.svg";
import { CustomSideNav } from "../../CustomSideNav/CustomSideNavigation";
import { Link } from "react-router-dom";
// import home from "../Assets/images/home.svg";
// import note from "../Assets/images/note.svg";
// import emptywallet from "../Assets/images/emptywallet.svg";
// import setting from "../Assets/images/setting.svg";
// import messagequestion from "../Assets/images/messagequestion.svg";
import EmptyState from "../../../assets/icons/EmptyState.svg";
// import Ellipse from "../Assets/images/Ellipse.svg";
import CustomButton from "../../CustomButton/CustomButton";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiPlus } from "react-icons/fi";

export const Tracking= () => {
  return (
    <div className={style.containerDiv}>
      <div className={style.logoDiv}>
        <img src={logosvg} />
      </div>
      <div className={style.flexContainer}>
        <div className={style.navigation}>
          <CustomSideNav />
        </div>
        <div className={style.welcome}>
          <h4>OrderID#00011</h4>
          <div>
            <p>Overview</p>
          </div>
          <div>
            <img src={trackingImage} className={style.tracking} />
          </div>
        </div>
        <div className={style.profile}>
          <div className={style.icon}>
            <div>
              <IoMdNotificationsOutline />
            </div>
            <div>
              <CgProfile />
            </div>
            <h6>Munirah Subair</h6>
            <div>
              <IoIosArrowDown />{" "}
            </div>
          
            <div>  <p>Stops</p>
              <img src={locationframe} className={style.frame} />
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={trackingImage} className={style.tracking} />
      </div> */}

      <div className={style.activity}>
        <img src={EmptyState} />
        <span>No orders Placed</span>
      </div>
    </div>
  );
};
