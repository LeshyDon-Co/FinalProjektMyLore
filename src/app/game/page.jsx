"use client";
import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";

function Game() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <NameOverview />
        Auf dieser Seite wird gespielt!
      </div>
    </div>
  );
}

export default Game;
