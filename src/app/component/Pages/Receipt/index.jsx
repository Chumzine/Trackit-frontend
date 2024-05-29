import CustomButton from "../../CustomButton/CustomButton";
import style from "./style.module.css";

export const WebReceipt = () => {
    const handleEdit = () => {}
    return (
        <>
        <main>
            <div className={style.container}>
                <h1>Receipt</h1>
                    <div className={style.details}>
                        <div>
                            <h4>Pick up details</h4>
                            <p>Munirah Subair</p>
                            <p>08123456789</p>
                            <p>3, Yaba Lagos</p>
                        </div>
                        <div className={style.para1}>
                            <span onClick={handleEdit}>Edit</span>
                        </div>
                    </div>
                    <div className={style.details}>
                        <div>
                            <h4>Drop off details</h4>
                            <p>Oludolapo Balogun</p>
                            <p>08123458021</p>
                            <p>Ilasan Lekki</p>
                        </div>
                        <div className={style.para2}>
                            <span onClick={handleEdit}>Edit</span>
                        </div>
                    </div>
                    <div className={style["tracking-no"]}>
                        <div>
                            <h4>Tracking No</h4>
                        </div>
                        <div>
                            <p>00011</p>
                        </div>
                    </div>
                    <div className={style.fee}>
                        <div>
                            <h4>Total Fee</h4>
                        </div>
                        <div>
                            <p>#1500</p>
                        </div>
                    </div>
                    <div>
                        <CustomButton className={style.button}>Confirm Order</CustomButton>
                    </div>
            </div>
        </main>
        </>
    )
}