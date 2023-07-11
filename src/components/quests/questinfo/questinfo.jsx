"use client";
import styles from "./questinfo.module.css";
import React from "react";

function QuestInfo() {
  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questTitel}>
        Hier kommt der vollständige Titel der Quest rein
      </div>
      <div className={styles.questInfo}>
        Hier kommt die Questbeschreibung rein
      </div>
    </div>
  );
}

export default QuestInfo;
