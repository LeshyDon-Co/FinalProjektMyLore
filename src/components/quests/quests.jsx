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

  // const [storedData, setStoredData] = useState();

  // try {
  //   setStoredData(localStorage.getItem("userdaten"));
  // } catch (error) {}
  // const storedData = localStorage.getItem("userdaten");
  // const infoData = JSON.parse(storedData);
  // const quests = infoData.quests;
  // console.log("stored:", quests);

  // const getQuestData = async () => {
  //   const res = await fetch(`/api/auth/quest?quests=${quests}`);
  //   console.log("res", res);
  //   if (!res.ok) {
  //     throw new Error("Failed Datafetching");
  //   }

  //   const data = await res.json();
  //   setAllData(data);
  // };

  //---------------------------------------------------------//

  useEffect(() => {
    if (session.data) {
      // const
      const storedData = localStorage.getItem("userdaten");
      const infoData = JSON.parse(storedData);
      const quests = infoData.quests;
      console.log("quests", quests);
      console.log("session.data", session.data, session);
      const getQuestData = async () => {
        const res = await fetch(`/api/auth/quest?quests=${quests}`);
        // const res = await quests.map((route) =>
        //   fetch(`/api/auth/quest?quests=${route}`).then((response) =>
        //     allData.push(response.json())
        //   )
        // );
        // console.log("allData nach push", allData);
        console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        // const data = Promise.all(res).then((arrayData) =>
        //   arrayData.reduce((adata, item) => [...adata, ...item], [])
        // );

        const data = await res.json();
        console.log("DataArray", data);
        setAllData(data);
      };
      getQuestData();
    }
  }, [session]);

  // --------------------------------------------------------//

  // useEffect(() => {
  //   if (session.data) {
  //     getQuestData();
  //   }
  // }, [session]);

  console.log("Quests", allData);
  // console.log("title", allData[0].text);

  // ----------------------------------------------------------//

  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questList}>
        <QuestList allData={allData} />
      </div>
      <div className={styles.questInfo}>
        <QuestInfo allData={allData} />
      </div>
    </div>
  );
}

export default Quests;
