import style from "./earn.module.css";
import Box from "../../../assets/icons/Box.svg";

export const EarnOption = () => {
  return (
    <div>
      <div className={style.earn}>
        <div className={style.info}>
          <h3>Earn with Track it</h3>
          <p>
            If you're a bike owner and you are looking to double your earning
            capacity, we want you on the Track it Team. Join the team to
            increase your earnings
          </p>
          <a href="#">Ride with us!</a>
        </div>
        <div>
          <img className={style.image0} src={Box} />
        </div>
      </div>
    </div>
  );
};
