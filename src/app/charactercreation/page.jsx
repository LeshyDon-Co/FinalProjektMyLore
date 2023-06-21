import Charactercard from "@/components/charactercard/charactercard";
import React from "react";
import styles from "./page.module.css";

function CharakterErstellung() {
  return (
    <div className={styles.container}>
      Wähle deinen Helden
      <Charactercard />
    </div>
  );
}

export default CharakterErstellung;
