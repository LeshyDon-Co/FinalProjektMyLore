"use client";
import styles from "./questlistoverview.module.css";
import React, { useEffect, useState } from "react";
import Listitem from "@/components/Listitem/listitem";
import Questlistitem from "@/components/QuestListItem/questlistitem";
import { useRouter } from "next/navigation";

//--------------------------------------------------------------//

function QuestListOverview() {

  const router = useRouter();
  const [quests, setQuests] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState();


//--------------------------------------------------------------//

  const handleItemClick = (index) => {
    console.log("selected Quest:", selectedItemIndex);
    router.push("/questlog")
  }

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
              index={index}
              title={quest.title}
              onItemClick={handleItemClick}
              isSelected={selectedItemIndex === index}
            />
          )
        })}
      </div>
    </div>
  );
};

export default QuestListOverview;
