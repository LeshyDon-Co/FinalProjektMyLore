"use client";
import styles from "./characterstats.module.css";
import React, { useEffect, useState } from "react";

function CharacterStats() {

  const [ATK, setATK] = useState("");
  const [DEF, setDEF] = useState("");
  const [HP, setHP] = useState("");
  const [stadium, setStadium] = useState("");
  const [characteristic, setCaracteristic] = useState("");

  useEffect(()=> {
      const storedData = localStorage.getItem("userdaten");
      const infoData = JSON.parse(storedData);
    
      setATK(infoData.attack);
      setDEF(infoData.defense);
      setHP(infoData.health);
      setStadium(infoData.stadium);
      setCaracteristic(infoData.characteristic);
  },[]);
  

  return (
    <div className={styles.bodyComponent}>
      <div>Status</div>
      <div className={styles.statusData}>
        HP: {HP}
        <br />
        ATK: {ATK}
        <br />
        DEF: {DEF}
        <br />
        STATUS: {stadium} {characteristic}
      </div>
    </div>
  );
}

export default CharacterStats;
