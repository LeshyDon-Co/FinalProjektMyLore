"use client";
import styles from "./page.module.css";
import React from "react";
import Membercard from "@/components/cards/membercard/membercard";

function About() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>Das Team:</h2>
        <div className={styles.allMembers}>
          <Membercard />
        </div>
      </div>
    </div>
  );
}

export default About;
