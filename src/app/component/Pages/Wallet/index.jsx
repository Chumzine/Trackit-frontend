import CustomButton from "../../CustomButton/CustomButton";
import { CustomSideNav } from "../../CustomSideNav/CustomSideNavigation";
import { MainHeader } from "../../MainHeader";
import Logo from "../../../assets/images/logo.png";
import { ReactComponent as CardsIcon } from "../../../assets/icons/cards.svg";
import style from "./style.module.css"

export const Wallet = () => {
    return (
        <>
        <header>
            <img src={Logo} alt="Trackit logo" />
        </header>
        <main>
            <div className={style.wrapper}>
                <CustomSideNav />
                <div className={style.wrapper}>
                    <div>
                        <MainHeader>
                            <h3><span role="img" aria-label="hello">👋</span>Welcome back, Munirah</h3>
                            <p>Let's deliver your package today</p> 
                        </MainHeader>
                    </div>
                    <div>
                        <div className="">
                            <div>
                                <p>Wallet Balance</p>
                                <span></span>
                            </div>
                            <div>
                                <p>Fund Wallet</p>
                                <div>
                                    <div>
                                        <label htmlFor="">Amount</label>
                                        <input type="text" placeholder="Enter Amount" />
                                    </div>
                                    <div>
                                        <CustomButton>Confirm</CustomButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Transactions</h2>
                            <div>
                                <CardsIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}