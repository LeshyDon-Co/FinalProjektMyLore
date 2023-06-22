"use client";
import React from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/charactercard/charactercard";

function CharakterErstellung() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Charactercard />
      </div>
    </div>
  );
}

export default CharakterErstellung;
