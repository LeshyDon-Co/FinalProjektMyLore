import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import ItemHolder from "@/components/itemholder/itemholder";

function Inventar() {
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
          Hier kommen die Inventarslots rein
          <div className={styles.itemholder}>
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
            <ItemHolder />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventar;
