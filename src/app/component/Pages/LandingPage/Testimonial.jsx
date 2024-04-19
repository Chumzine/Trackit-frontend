import style from "./testimonials.module.css";
import james from "../../../assets/icons/james.svg";
import felix from "../../../assets/icons/felix.svg";
import charles from "../../../assets/icons/charles.svg";

export const Testimonial = () => {
  return (
    <div className={style.cardDiv}>
      <div>
        <h6>Testimonials</h6>
      </div>
      <div className={style.cardContainer}>
        <div className={style.card1}>
          <p className={style.name}>James</p>
          <p className={style.description}>
            The real time tracking feature is a <br /> game changer. I always
            know exactly <br /> where my package is.
          </p>
          <img src={james} />
        </div>
        <div className={style.card2}>
          <p className={style.name}>Felix</p>
          <p className={style.description}>
            Highly recommended. I love <br /> Track it
          </p>
          <img src={felix} />
        </div>
        <div className={style.card3}>
          <p className={style.name}>Charles</p>
          <p className={style.description}>
            They delivered my package on time <br /> with utmost case
          </p>
          <img src={charles} />
        </div>
      </div>
    </div>
  );
};
