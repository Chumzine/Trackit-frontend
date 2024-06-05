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
          <img className={style.image0} src={receivingPackage} alt="A client receiving a package" />
        </div>
        <div className={style.group}>
          <div className={style.groupOne}>
            <div className={style.groupa}>
              <div>
                <img className={style.image1} src={bolt} alt="Lightening speed" />
              </div>

              <div>
                <h5 className={style.swift}>Swift Delivery</h5>
              </div>
            </div><br /><br />
            <div>
              <p>
                Packages are delivered quickly and efficiently,
                <br /> prioritizing speed and reliability.
            </p>
            </div>
          </div>
          
          <br />

          <div className={style.groupOne}>
            <div className={style.groupa}>
              <div>
                <img className={style.image2} src={payments} alt="Cash notes" />
              </div>
              <div>
                <h5 className={style.cost}>Cost Saving</h5>
              </div>
            </div><br /><br />
            <div>
              <p>
                We offer affordable and competitive pricing <br />
                allowing you to save money.
              </p> 
            </div>
          </div>
          
          <br />

          <div className={style.groupOne}>
            <div className={style.groupa}>
              <div>
                <img className={style.image3} src={arming_countdown} alt="Security shield" />
              </div>
              <div className={style.lastclass}>
                <h5 className={style.real}>Real time Tracking</h5>
              </div>
            </div><br /><br />
            <div>
              <p>
                Easily monitor the progress of your delivery in <br /> real time.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

