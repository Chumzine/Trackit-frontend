import React, { useState } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import { ReactComponent as TrackingImage } from "../../../assets/icons/tracking.svg";
import Logo from "../../../assets/images/logo.png";
import style from "./style.module.css"

export const SignupPage = () => {
    // State to collect user data
    const [form, setForm] = useState({
        name: '',
        email: '',
        phoneNum: '',
        password: ''
    })

    // Define state for checkbox
    const [check, setCheck] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Form validation
        if (!form.name || !form.email || !form.phoneNum || !form.password) {
            alert('Please fill in all fields.');
            return;
        }

        // Send form data to backend for processing
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (!response.ok) {
                throw new Error('Failed to sign up. Please try again later.');
            }

            // Handle successful sign-up
            alert('Sign-up successful! Please log in.');

            // Reset form fields
            setForm({
                name: '',
                email: '',
                phoneNum: '',
                password: ''
            });
        } catch (error) {
            // Handle errors
            alert(error.message);
        }
    }

    return (
        <section>
            <header>
                <img src={Logo} alt="trackit logo" />
            </header>
            <main>
                <div className={style.container}>
                    <h2>Create an account</h2> 
                    <form onSubmit={handleSubmit}>
                        <div className={style['form-input']}>
                            <div>
                                <label htmlFor="Full name">Full name</label><br />
                                <input type="text" placeholder="full name" name="name" value={form.name} onChange={handleChange} />
                            </div><br />
                            <div>
                                <label htmlFor="Email">Email</label><br />
                                <input type="text" placeholder="Enter email" name="email" value={form.email} onChange={handleChange} />
                            </div><br />
                            <div>
                                <label htmlFor="Phone number">Phone number</label><br />
                                <input type="tel" placeholder="Enter phone number" name="phoneNum" value={form.phoneNum} onChange={handleChange} />
                            </div><br />
                            <div>
                                <label htmlFor="Password">Password</label><br />
                                <input type="password" placeholder="Enter password" name="password" value={form.password} onChange={handleChange} />
                            </div><br />
                        </div>
                        <div className={style.check}>
                            <input type="checkbox" checked={check} onChange={(e) => setCheck(e.target.checked)} />
                            <label htmlFor="checkbox">
                            I agree to <a href="!#">Terms of Service</a> and <a href="!#">Privacy Policy</a>
                            </label>
                        </div><br /><br /><br />
                        <div>
                            <CustomButton className={style.create}>Create an account</CustomButton>
                        </div>
                    </form>
                    <div className={style.login}>
                        <p>Already have an account? <a href="!#">Log in</a></p>
                    </div>
                </div>
                <div className={style.preview}>
                    <TrackingImage /> 
                </div> 
            </main>    
        </section>
    )
}
