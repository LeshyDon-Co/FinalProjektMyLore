import Charactercard from "@/components/charactercard/charactercard";
import React from "react";
import styles from "./page.module.css";

function CharakterErstellung() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
      <Charactercard />
      Wähle deinen Helden
      </div>
    </div>
  );
}

export default CharakterErstellung;
