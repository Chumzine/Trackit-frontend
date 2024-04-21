import Logo from '../../../assets/images/logo.png'
import style from "./style.module.css";
import logosvg from "../../../assets/icons/logo.svg.svg";
import { CustomSideNav} from "../../CustomSideNav/CustomSideNavigation"
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

export const Orders = () => {
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
          <h4>Orders</h4>
          <div className={style.para}>
            <Link className={style.link}>Pending Orders</Link>
            <div className={style.line}></div>
            <Link className={style.link}>Completed Orders</Link>
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
          </div>
        </div>
      </div>
      <div className={style.deliveryInfo}>
        <Link className={style.info}>Date Placed</Link>
        <Link className={style.info}>Tracking ID</Link>
        <Link className={style.info}>Pickup Address</Link>
        <Link className={style.info}>Dropoff Address</Link>
        <Link className={style.info}>Phone Number</Link>
        <Link className={style.info}> Price</Link>
        <Link className={style.info}>Status</Link>
      </div>
      <div className={style.activity}>
        <img src={EmptyState} />
        <span>No orders Placed</span>
      </div>
    </div>
  );
};
