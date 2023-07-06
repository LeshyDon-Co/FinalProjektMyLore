import QuestInfo from "./questinfo/questinfo";
import QuestList from "./questlist/questlist";
import styles from "./quests.module.css";
import React from "react";

function Quests() {
  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questList}>
        <QuestList />
      </div>
      <div className={styles.questInfo}>
        <QuestInfo />
      </div>
    </div>
  );
}

export default Quests;
