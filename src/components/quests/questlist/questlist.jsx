import Listitem from "@/components/Listitem/listitem";
import styles from "./questlist.module.css";
import React from "react";

function QuestList() {
  return (
    <div className={styles.bodyComponent}>
      <div>QuestList</div>
      <div className={styles.listItem}>
        Soll hier das von Maddy gebaute ListItem rein? (Lila Shadow?)
      </div>
    </div>
  );
}

export default QuestList;
