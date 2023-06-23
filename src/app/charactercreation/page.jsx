"use client";
import React from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";

function CharakterErstellung() {
  return (
    <div className={styles.body}>
      <div className={styles.h2}>
        <h2>Charaktererstellung</h2>
      </div>
      <div className={styles.container}>
        <Charactercard />
      </div>
      <div className={styles.button}>
        <button>Geschichte schreiben</button>
      </div>
    </div>
  );
}

export default CharakterErstellung;
