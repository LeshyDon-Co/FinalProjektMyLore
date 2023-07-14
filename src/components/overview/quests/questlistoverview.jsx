"use client";
import styles from "./questlistoverview.module.css";
import React, { useEffect, useState } from "react";
import Listitem from "@/components/Listitem/listitem";
import Questlistitem from "@/components/QuestListItem/questlistitem";

//--------------------------------------------------------------//

function QuestListOverview() {

  // const [charID, setCharID] = useState("");
  const [quests, setQuests] = useState([]);

//--------------------------------------------------------------//

  const getQuests = async(charID) => {
    console.log("ingetQuests:",charID);
    const res = await fetch(`/api/auth/quest/${charID}`);
    // const res = await fetch(`/api/auth/characters/quests/${charID}`);

    if(!res.ok){
      throw new Error("Datafetching failed in getQuests");
    }

    const data = await res.json();

    setQuests(data);
  }

//--------------------------------------------------------------//
  useEffect(() => {
    const userdata = localStorage.getItem("userdaten");
    const userdataparsed = JSON.parse(userdata);
    const charID = userdataparsed._id;
    getQuests(charID);
  },[]);

  console.log(quests);
//--------------------------------------------------------------//

  return(
    <div className={styles.bodyComponent}>
      <div className={styles.h2}>Aktive Quests:</div>
      <div>
        {quests.map((quest, index) => {
          return(
            <Questlistitem
              key={index}
              title={quest.title}
            />
          )
        })}
      </div>
    </div>
  );
};

export default QuestListOverview;
