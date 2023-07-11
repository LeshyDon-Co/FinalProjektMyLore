"use client";
import QuestInfo from "./questinfo/questinfo";
import QuestList from "./questlist/questlist";
import styles from "./quests.module.css";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";

function Quests() {
  const router = useRouter();
  const session = useSession();
  const [allData, setAllData] = useState([]);

  const storedData = localStorage.getItem("userdaten");
  const infoData = JSON.parse(storedData);
  const quests = infoData.quests;

  useEffect(() => {
    if (session.data) {
      console.log("session.data", session.data, session);
      const getQuestData = async () => {
        const res = await fetch(`/api/auth/quest?quests=${quests}`);
        // console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        const data = await res.json();
        setAllData(data);
      };
      getQuestData();
    }
  }, [session]);

  // --------------------------------------------------------//

  useEffect(() => {
    if (session.data) {
      getQuestData();
    }
  }, [session]);

  console.log("Quests", allData);

  // ----------------------------------------------------------//

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
