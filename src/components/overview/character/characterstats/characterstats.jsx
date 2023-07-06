import styles from "./characterstats.module.css";
import React from "react";

function CharacterStats() {
  const storedData = localStorage.getItem("userdaten");
  const infoData = JSON.parse(storedData);
  const ATK = infoData.attack;
  const DEF = infoData.defense;
  const HP = infoData.health;
  const stadium = infoData.stadium;
  const characteristic = infoData.characteristic;

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
