"use client";
import styles from "./quests.module.css";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";
import Listitem from "../Listitem/listitem";

function Quests() {
  const router = useRouter();
  const session = useSession();
  const [allData, setAllData] = useState([]);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  //---------------------------------------------------------//

  useEffect(() => {
    if (session.data) {
      const storedData = localStorage.getItem("userdaten");
      const infoData = JSON.parse(storedData);
      const quests = infoData.quests;

      console.log("quests", quests);
      console.log("session.data", session.data, session);
      const getQuestData = async () => {
        const res = await fetch(`/api/auth/quest?quests=${quests}`);

        console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        const data = await res.json();
        console.log("DataArray", data);
        setAllData(data);
      };
      getQuestData();
    }
  }, [session]);

  // --------------------------------------------------------//

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    console.log("selected Quest:", selectedItemIndex);
  };

  //----------------------------------------------------------//

  console.log("Quests", allData);
  // console.log("title", allData[0].text);

  const title = allData[selectedItemIndex].title;
  const text = allData[selectedItemIndex].text;
  console.log(title);

  // ----------------------------------------------------------//

  return (
    <div className={styles.bodyComponent}>
      <div className={styles.questList}>
        <h2>Questübersicht</h2>
        <div className={styles.listItem}>
          {allData.map((quest, index) => {
            return (
              <Listitem
                key={index}
                index={index}
                name={quest.title}
                onItemClick={handleItemClick}
                isSelected={selectedItemIndex === index}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.questInfo}>
        <div className={styles.title}>{title}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
}

export default Quests;
