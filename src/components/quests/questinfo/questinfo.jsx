"use client";
import styles from "./questinfo.module.css";
import React from "react";

function QuestInfo({allData}) {
  console.log("Questinfo", allData);
  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questTitel}>{allData[0]?.title}</div>
      <div className={styles.questInfo}>{allData?.text}</div>
    </div>
  );
}

export default QuestInfo;
