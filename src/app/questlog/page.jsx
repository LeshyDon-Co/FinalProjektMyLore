import React from "react";
import styles from "./page.module.css";

function Questlog() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        Hier werden alle Quest aufgelistet, die der Spieler aktuell aktiv hat.
        Zusätzlich wird es eine Liste aller bereits abgeschlossenen Quests geben
      </div>
    </div>
  );
}

export default Questlog;
