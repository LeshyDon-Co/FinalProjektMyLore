import React from "react";
import styles from "./page.module.css";
import QuestList from "@/components/quests/questlist/questlist";
import QuestInfo from "@/components/quests/questinfo/questinfo";
import NameOverview from "@/components/overview/name/nameoverview";
import Quests from "@/components/quests/quests";

function Questlog() {
  return (
    <div className={styles.body}>
      <NameOverview />
      <div className={styles.container}>
        <Quests />
      </div>
    </div>
  );
}

export default Questlog;
