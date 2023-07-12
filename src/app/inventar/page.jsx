"use client";
import React, {useEffect, useState} from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import ItemHolder from "@/components/itemholder/itemholder";

function Inventar() {
  const [items, setItems] = useState([]);

  const getItemData = async () => {
    try {
      const res = await fetch(`/api/auth/item`);

      if (!res.ok) {
        throw new Error("Failed to fetch Data!");
      }

      const data = await res.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getItemData();

    // const storedData = localStorage.getItem("userdaten");
    // const infodata = JSON.parse(storedData);

    // setItems(infodata.items)
  }, []);

  console.log(items);

  return (
    <div className={styles.body}>
      <NameOverview />
      <div className={styles.container}>
        <div className={styles.skills}>Coming soon</div>
        <div className={styles.char}>
          <div className={styles.itemVertical}>
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
          </div>
          <div className={styles.itemHorizontal}>
            <ItemHolder />
            <ItemHolder />
          </div>
        </div>
        <div className={styles.inventar}>
          Rucksack
          <div className={styles.itemholder}>
            {items.map((item, index) => (
              <ItemHolder
                key={item._id}
                name={item.itemname}
                pic={item.itempicture}
                price={item.itemprice}
                text={item.itemtext}
                type={item.itemtype}
                id={item.itemid}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventar;
