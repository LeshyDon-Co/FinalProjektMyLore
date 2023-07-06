import React from "react";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";

function Worldmap() {
  return (
    <div className={styles.body}>
      <NameOverview />
      <div className={styles.container}>
        Die Weltkarte wird hier zu sehen sein!
      </div>
    </div>
  );
}

export default Worldmap;
