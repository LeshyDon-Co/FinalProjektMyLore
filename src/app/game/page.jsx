"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import QuestListOverview from "@/components/overview/quests/questlistoverview";
import Location from "@/components/overview/location/location";
import CharacterStats from "@/components/overview/character/characterstats/characterstats";
import Image from "next/image";

//----------------------------------------------------------//

function Game() {
  const [charData, setCharData] = useState([]);
  const [charnation, setCharnation] = useState("");

  //----------------------------------------------------------//

  const getCharData = async (charID) => {
    const res = await fetch(`/api/auth/character/${charID}`);

    if (!res.ok) {
      throw new Error("Failed datafetching in game");
    }

    const data = await res.json();
    setCharData(data);
  };

  //----------------------------------------------------------//

  useEffect(() => {
    if (localStorage.getItem("userdaten") === null) {
      console.log("Keine Userdaten vorhanden");
    } else {
      const userdata = localStorage.getItem("userdaten");
      const userdataparsed = JSON.parse(userdata);
      const charID = userdataparsed._id;

      setCharnation(userdataparsed.nation);

      getCharData(charID);
    }
  }, []);
  //----------------------------------------------------------//

  return (
    <div className={styles.body}>
      <div className={styles.nameAndLocation}>
        <div className={styles.name}>
        <NameOverview />
        </div>
        <div className={styles.location}>
        <Location />
        </div>
      </div>
      <div className={styles.locationAndChar}>
        <div className={styles.quest}>
          <QuestListOverview />
        </div>
        <div className={styles.characterAll}>
          {charnation === "Wischi-Waschi-Bär" && (
            <div className={styles.charwaschi}> </div>
          )}
          {charnation === "Axolittle" && (
            <div className={styles.charaxolittle}> </div>
          )}
          {charnation === "Flammengo" && (
            <div className={styles.charflammengo}> </div>
          )}
          <CharacterStats />
        </div>
      </div>
    </div>
  );
}

export default Game;
