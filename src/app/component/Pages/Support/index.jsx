import React from 'react';
import Logo from '../../../assets/images/logo.png';
import { CustomSideNav } from "../../CustomSideNav/CustomSideNavigation";
import { ReactComponent as CallUsIcon } from '../../../assets/icons/call-us.svg';
import { ReactComponent as EmailUsIcon } from '../../../assets/icons/email-us.svg';
import { ReactComponent as ChatIcon } from '../../../assets/icons/chat.svg';
import { ReactComponent as SocialMediaIcon } from '../../../assets/icons/social-media.svg';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import style from './style.module.css';

export const Support = () => {
    return (
        <>
            <header>
                <img src={Logo} alt="Trackit logo" />
            </header>

            <div className={style.sideNavContainer}>
                <CustomSideNav />
            </div>

            <main>
                <p className={style.supportText}>Support</p>

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

                <div className={style.container}>
                    <div className={style['content-container']}>
                        <div className={style.call}>
                            <CallUsIcon />
                            <div>
                                <h5>Call Us</h5>
                                <p>+23498765432</p>
                            </div>
                        </div>
                        <div className={style.email}>
                            <EmailUsIcon />
                            <div>
                                <h5>Email Us</h5>
                                <p>support@trackit.com</p>
                            </div>
                        </div>
                        <div className={style.chat}>
                            <ChatIcon />
                            <div>
                                <h5>Chat</h5>
                                <p>9AM-5PM.M-F</p>
                            </div>
                        </div>
                        <div className={style.socials}>
                            <SocialMediaIcon />
                            <div>
                                <h5>Social Media</h5>
                                <p>@trackit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
