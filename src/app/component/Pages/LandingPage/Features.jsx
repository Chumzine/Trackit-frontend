import style from "./feature.module.css";
import receivingPackage from "../../../assets/icons/receivingpackage.svg";
import payments from "../../../assets/icons/payments.svg";
import arming_countdown from "../../../assets/icons/arming_countdown.svg";
import bolt from "../../../assets/icons/bolt.svg";

export const Features = () => {
  return (
    <div className={style.containerDiv}>
      <h1 className={style.title}>Why choose us?</h1>
      <div className={style.flexContainers}>
        <div>
          <img className={style.image0} src={receivingPackage} />
        </div>
        <div className={style.group}>
          <div className={style.groupOne}>
            <div>
              <img className={style.image1} src={bolt} />
            </div>

            <div>
              <h6>Swift Delivery</h6>
            </div>
          </div>
          <p>
            Packages are delivered quickly and efficiently,
            <br /> prioritizing speed and reliability.
          </p>
          <br />

          <div className={style.groupOne}>
            <div>
              <img className={style.image2} src={payments} />
            </div>
            <div>
              <h6>Cost Saving</h6>
            </div>
          </div>
          <p>
            We offer affordable and competitive pricing <br />
            allowing you to save money.
          </p>
          <br />

          <div className={style.groupOne}>
            <div>
              <img className={style.image3} src={arming_countdown} />
            </div>
            <div className={style.lastclass}>
              <h6>Real time Tracking</h6>
            </div>
          </div>
          <p>
            Easily monitor the progress of your delivery in <br /> real time.
          </p>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className={style.groupOne}>
              <div>
                <img src={arming_countdown} />
              </div>
              <div>
                <p>Real time Tracking</p>
              </div>
            </div>
            <p>Easily monitor the progress of your delivery in <br /> real time.</p> */
}
