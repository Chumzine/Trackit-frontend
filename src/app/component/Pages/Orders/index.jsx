import React from "react";
import Logo from '../../../assets/images/logo.png';
import style from "./style.module.css";
import { CustomSideNav } from "../../CustomSideNav/CustomSideNavigation";
import { Link } from "react-router-dom";
import EmptyState from "../../../assets/icons/EmptyState.svg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

export const Orders = () => {
  return (
    <>
      <header className={style.header}>
        <img src={Logo} alt="Trackit logo" className={style.logo} />
    
      </header>

      <div className={style.container}>
        <div className={style.sideNavContainer}>
          <CustomSideNav />
        </div>
        <main className={style.main}>
          <div className={style.welcomeContainer}>
            <div className={style.welcome}>
              <h4>Orders</h4>
              <div className={style.para}>
                <Link className={`${style.link} ${style.active}`}>Pending Orders</Link>
                <Link className={style.link}>Completed Orders</Link>
              </div>
            </div>
          </div>

          <div className={style.profile}>
                    <div className={style.icon}>
                        <div className={style.profileIconContainer}>
                            <CgProfile />
                        </div>
                        <h6>Munirah Subair</h6>
                        <IoIosArrowDown />
                    </div>
                </div>

                <div className={style.notificationIcon}>
                    <IoMdNotificationsOutline />
                </div>
                
          <div className={style.deliveryInfoContainer}>
            <div className={style.deliveryInfo}>
              <Link className={style.info}>Date Placed</Link>
              <Link className={style.info}>Tracking ID</Link>
              <Link className={style.info}>Pickup Address</Link>
              <Link className={style.info}>Dropoff Address</Link>
              <Link className={style.info}>Phone Number</Link>
              <Link className={style.info}>Price</Link>
              <Link className={style.info}>Status</Link>
            </div>
            <div className={style.activity}>
              <img src={EmptyState} alt="Empty box icon" />
              <span>No Orders Placed</span>
            </div>
            <div className={style.activity}>
              <img src={EmptyState} alt="Empty box icon" />
              <span>No orders Placed</span>
            </div> 
          </div>
        </main>
      </div>
    </>
  );
};
