import React, { useState } from 'react';
import { IoMdNotificationsOutline, IoIosArrowDown } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { ReactComponent as DisplayPicIcon } from '../../../assets/icons/display-pic.svg';
import { ReactComponent as EditIcon } from '../../../assets/icons/edit.svg';
import CustomButton from "../../CustomButton/CustomButton";
import Logo from '../../../assets/images/logo.png';
import { CustomSideNav } from '../../CustomSideNav/CustomSideNavigation';
import style from './style.module.css';

export const Profile = () => {
    const [profile, setProfile] = useState({
        fullName: 'Munirah Subair',
        email: 'munirahsubair@gmail.com',
        phoneNumber: '+2348123456789',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(profile)
            });

            if (!response.ok) {
                throw new Error('Failed to update. Please try again later.');
            }

            alert('Update successful!');

        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <header className={style.header}>
                <img src={Logo} alt="Trackit logo" className={style.logo} />
            </header>

            <div className={style.sideNavContainer}>
                <CustomSideNav />
            </div>

            <main className={style.main}>
                <h2 className={style.profileText}>Profile</h2>
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
                
                <div className={style.formContainer}>
                    <div className={style.profilePicContainer}>
                        <DisplayPicIcon className={style.profilePic} />
                        <div className={style.editIcon}>
                            <EditIcon />
                        </div>
                    </div>

                    <form className={style.form} onSubmit={handleSubmit}>
                        <div className={style.inputGroup}>
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={profile.fullName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={style.inputGroup}>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={profile.phoneNumber}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className={style.buttonGroup}>
                            <CustomButton type="submit" className={style.updateButton}>
                                Update
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </main>
        </>
    );
};
