import React from "react";
import style from "./riderweb1.module.css";
import { Link } from "react-router-dom";
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
      <div className={style.statusContainer}>
        <h3>Rider found!</h3>
        <p>Waiting for rider to confirm the order</p>
        <div className={style.detailsContainer}>
          <div className={style.progressContainer}>
            <div className={style.progressIcon}></div>
            <div className={style.progressBar}></div>
          </div>
          <div className={style.pickupDetails}>
            <h4>Pick up details</h4>
            <p>Munirah Subair</p>
            <p>08123456789</p>
            <p>3, Yaba Lagos</p>
            <a href="#" className={style.editLink}>
              Edit
            </a>
          </div>
          
          <Link to="/cancel request" className={style.cancelButton}>Cancel request</Link>
        </div>
      </div>
    </div>
  );
};

export default RiderStatus;
