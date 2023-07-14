"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import ItemHolder from "@/components/itemholder/itemholder";
import ItemHolderHoizontal from "@/components/itemholderhorizontal/itemholderhorizontal";
import ItemHolderVertikal from "@/components/itemholdervertikal/itemholdervertikal";


function Inventar() {

  const [charData, setCharData] = useState([]);
  const [charnation, setCharnation] = useState("");

//----------------------------------------------------------//
 
  const getCharData = async (charID) => {
    const res = await fetch(`/api/auth/character/${charID}`, {
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed Datafetching");
    }

    const data = await res.json();
    // console.log("data", data);
    setCharData(data);

  };

//----------------------------------------------------------//
 
  useEffect(() =>{

    const userdata = localStorage.getItem("userdaten");
    const userdataparsed = JSON.parse(userdata);
    const charID = userdataparsed._id;
    setCharnation(userdataparsed.nation);
    // console.log("charnation:", charnation);
    // console.log("charID:", charID);
    
    getCharData(charID);

  },[])

  // console.log("chardata", charData);
 //----------------------------------------------------------//
 
  return (
    <div className={styles.body}>
      <NameOverview />
      <div className={styles.container}>
        <div className={styles.skills}>Skills coming soon...</div>
        <div className={styles.charitemcontainer}>
        <div className={styles.charcontainer}>
          <div className={styles.itemVertical}>
            <ItemHolderVertikal />
            <ItemHolderVertikal />
            <ItemHolderVertikal />
          </div>
          {(charnation === "Wischi-Waschi-Bär") && (
            <div className={styles.charwaschi}> </div>
          )}
          {(charnation === "Axolittle") && (
            <div className={styles.charaxolittle}> </div>
          )}
          {(charnation === "Flammengo") && (
            <div className={styles.charflamingo}> </div>
          )}
        </div>
        <div className={styles.itemHorizontal}>
            <ItemHolderHoizontal />
            <ItemHolderHoizontal />
          </div>
        </div>
        <div className={styles.inventar}>
          <h2 className={styles.rucksack}>Dein Rucksack</h2>
          <div className={styles.itemholder}>
            {charData.map((item, index) => (
              <ItemHolder key={item._id}
                          name={item.itemname}
                          pic={item.itempicture}
                          price={item.itemprice}
                          text={item.itemtext}
                          type={item.itemtype}
                          id={item.itemid} /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventar;
