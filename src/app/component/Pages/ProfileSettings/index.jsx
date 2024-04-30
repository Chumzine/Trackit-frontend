import Logo from '../../../assets/images/logo.png';
import { MainHeader } from '../../MainHeader';
import { CustomSideNav } from '../../CustomSideNav/CustomSideNavigation';
import CustomButton from "../../CustomButton/CustomButton";
import { ReactComponent as DisplayPicIcon } from '../../../assets/icons/display-pic.svg';
import React, { useState } from 'react';
import style from './style.module.css';


export const Profile = () => {
    // Define state to store profile data
    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
    });

      // Event handler to update form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
        ...prevProfile, [name]: value }));
    };

    // Event handler for submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    // Call API to update profile
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

            // Handle successful update
            alert('Update successful!');


            // Reset form fields after submission if needed
            setProfile({
            firstName: '',
            email: '',
            phoneNumber: '',
            });

        } catch (error) {
            // Handle errors
            alert(error.message);
        }
    }

    return (
        <>
        <header>
            <img src={Logo} alt="Trackit logo" />
        </header>
        <main>
            <CustomSideNav />
            <div className={style.content}>
                <div>
                    <MainHeader>
                        <h2>Profile</h2>
                    </MainHeader>
                </div>
                <div className={style['form-container']}>
                    <DisplayPicIcon />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="Full name">Full name</label><br />
                            <input type="text" placeholder="Full name" name="name" value={profile.fullName} onChange={handleInputChange} />
                        </div><br />
                        <div>
                            <label htmlFor="Email">Email</label><br />
                            <input type="text" placeholder="Enter email" name="email" value={profile.email} onChange={handleInputChange} />
                        </div><br />
                        <div>
                            <label htmlFor="Phone number">Phone number</label><br />
                            <input type="tel" placeholder="Enter phone number" name="phoneNumber" value={profile.phoneNumber} onChange={handleInputChange} />
                        </div><br />
                        <div>
                            <CustomButton className={style.upate}>Update</CustomButton>
                        </div>  
                    </form>
                </div>
            </div>
        </main>
        </>
    )
}


