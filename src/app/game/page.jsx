"use client";
import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import QuestListOverview from "@/components/overview/quests/questlistoverview";
import Location from "@/components/overview/location/location";
import CharacterStats from "@/components/overview/character/characterstats/characterstats";

function Game() {
  return (
    <div className={styles.body}>
      <div className={styles.questAndName}>
        <NameOverview />
        <div className={styles.quest}>
          <QuestListOverview />
        </div>
      </div>
      <div className={styles.locationAndChar}>
        <Location />
        <div className={styles.characterAll}>
          <div className={styles.pictureChar}>
            Hier kommt das Bild vom Char rein
          </div>
          <CharacterStats className={styles.characterStats} />
        </div>
      </div>
    </div>
  );
}

export default Game;
