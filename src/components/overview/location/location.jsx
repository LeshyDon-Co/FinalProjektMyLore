import styles from "./location.module.css";
import React from "react";

function Location() {
  const storedData = localStorage.getItem("userdaten");
  const infoData = JSON.parse(storedData);

  const location = infoData.nation;

  return (
    <div className={styles.bodyComponent}>
      Aktueller Standort:
      <br />
      {location}-City
    </div>
  );
}

export default Location;
