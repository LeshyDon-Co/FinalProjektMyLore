import QuestInfo from "./questinfo/questinfo";
import QuestList from "./questlist/questlist";
import styles from "./quests.module.css";
import React from "react";

function Quests() {
  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questhaeder}>
        <h2>Questlog</h2>
      </div>
      <div className={styles.questAll}>
        <div className={styles.questList}>
          <QuestList />
        </div>
        <div className={styles.questInfo}>
          <QuestInfo />
        </div>
      </div>
    </div>
  );
}

export default Quests;
