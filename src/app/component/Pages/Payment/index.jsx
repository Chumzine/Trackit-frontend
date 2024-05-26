import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import Logo from "../../../assets/images/logo.png";
import style from "./style.module.css";

export const PayStack = () => {
    // State to hold trasnsaction info
    const publicKey = "pk_test_3ab163262a2fb48204ff71d656dcef6f33d51aee"
    const amount = 300000  // Amount to be charged (in kobo)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay now",
        onSuccess: () =>
          alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You are yet to complete your payment, pay now!!"),
      }

    return (
        <>
         <header>
            <img src={Logo} alt="trackit logo" />
         </header>
         <main>
            <div className={style.checkout}>
                <div className={style.order}>
                    <p className={style.para}>Order Summary</p>
                    <p className={style.sub}>#2000</p>
                </div>
                <div className={style.delivery}>
                    <p className={style.para}>Delivery Charge</p>
                    <p className={style.sub}>&#8358;{amount/100}</p>
                </div>
            </div>
            <div className={style["checkout-form"]}>
                <form>
                    <div className={style["checkout-field"]}>
                        <label>Full name</label>
                        <input
                        type="text"
                        id="name"
                        placeholder="Enter full name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={style["checkout-field"]}>
                        <label>Email</label>
                        <input
                        type="text"
                        id="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={style["checkout-field"]}>
                        <label>Phone number</label>
                        <input
                        type="text"
                        id="phone"
                        placeholder="Enter Phone number"
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <PaystackButton {...componentProps} className={style["paystack-button"]}/>
                    </div> 
                </form>
                
            </div>
        </main>
        </>
        
    )
}