import React from "react";
import style from "./riderweb2.module.css";
import { Link } from "react-router-dom";
import felix from "../../../assets/icons/felix.svg";
import { IoCallOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const RiderStatus = () => {
  return (
    <div className={style.container}>
      <div className={style.mapContainer}>
        <MapContainer center={[6.5244, 3.3792]} zoom={13} className={style.map}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[6.5244, 3.3792]}>
            <Popup>Pick-up Location</Popup>
          </Marker>
        </MapContainer>
      </div>
     

      <div className={style.riderDetails}> 
      <p className={style.timer}>Ayomide is 3 mins away!</p>
        <img src={felix} alt="Rider" className={style.riderImage} />
        <div className={style.details}>
          <p>
            <strong>120</strong> <br></br> deliveries
          </p>
          <div className={style.divider}></div>
          <p>
            4 star <br></br> Rating
          </p>
          <div className={style.divider}></div>
          <p> Bike </p>
        </div>
      </div>
      <div className={style.actions}>
        <button className={style.callButton}>
         <IoCallOutline className={style.icon} />
        </button>
        <button className={style.messageButton}>
        <TbMessage className={style.icon} />
        </button>
      </div>
      <button className={style.cancelButton}>Cancel request</button>
    </div>
  );
};

export default RiderStatus;

// import React from "react";
// import styles from "./riderweb2.module.css";
// import felix from "../../../assets/icons/felix.svg"
// // import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// const RiderInfo = () => {

//   return (
//     <div className={styles.container}>
//       <div className={styles.mapContainer}>
//         <MapContainer center={[6.5244, 3.3792]} zoom={13} className={styles.map}>
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={[6.5244, 3.3792]}>
//             <Popup>Pick-up Location</Popup>
//           </Marker>
//         </MapContainer>
//       </div>
//       <p className={styles.status}> Ayomide is 3 mins away!</p>
//       <div className={styles.riderDetails}>
//         <img
//           src="rider-profile.jpg"
//           alt="Rider"
//           className={styles.riderImage}
//         />
//         <div className={styles.details}>
//           <p>
//             <strong>120</strong> deliveries
//           </p>
//           <p>
//             <strong>4 star</strong> Rating
//           </p>
//           <p>
//             <strong>Bike</strong>
//           </p>
//         </div>
//       </div>
//       <div className={styles.actions}>
//         <button className={styles.callButton}>Call</button>
//         <button className={styles.messageButton}>Message</button>
//       </div>
//       <button className={styles.cancelButton} >
//         Cancel request
//       </button>
//     </div>
//   );
// };

// export default RiderInfo;
