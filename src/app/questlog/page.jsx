import React from "react";
import styles from "./page.module.css";
import QuestList from "@/components/quests/questlist/questlist";
import QuestInfo from "@/components/quests/questinfo/questinfo";

function Questlog() {
  return (
    <div className={styles.body}>
      <div className={styles.questHeader}>
        <h2>Questlog</h2>
      </div>
      <div className={styles.container}>
        <QuestList />
        <QuestInfo />
      </div>
    </div>
  );
}

export default Questlog;
