import React,{ useEffect, useState } from 'react';
import styles from "./characterstatsinventar.module.css";

function Characterstatsinventar() {

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
          <div className={styles.h2}>Werte:</div>
          <div className={styles.statusData}>
            <div className={styles.statusdatabezeichnungen}>
              <div>Leben:</div>
              <div>Attacke:</div>
              <div>Verteidigung:</div>
              <div>Eigenschaft:</div>
            </div>
            <div className={styles.statusdatawerte}>
              <div>{HP}</div>
              <div>{ATK}</div>
              <div>{DEF}</div>
              <div>{stadium} {characteristic}</div>
            </div>
          </div>
        </div>
      );
}

export default Characterstatsinventar;