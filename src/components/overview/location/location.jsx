"use client";
import styles from "./location.module.css";
import React, { useEffect, useState } from "react";

function Location() {

  const [location, setLocation] = useState("");


  useEffect(() => {
    const storedData = localStorage.getItem("userdaten") || "";
    const infoData = JSON.parse(storedData);
    setLocation(infoData.location)
  },[])

  return (
    <div className={styles.bodyComponent}>
      Aktueller Standort:
      {` "${location}"`}
    </div>
  );
}

export default Location;
