import React from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/charactercard/charactercard";

function CharakterÜbersicht() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        Wähle deinen Helden
        <Charactercard />
        <Charactercard />
        <Charactercard />
      </div>
    </div>
  );
}

export default CharakterÜbersicht;
