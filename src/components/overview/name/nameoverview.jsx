"use client";

import styles from "./nameoverview.module.css";
import React from "react";

function NameOverview() {
  // console.log(props);
  // const {storedData, setStoredData} = props;

  const storedData = localStorage.getItem("userdaten");
  const infoData = JSON.parse(storedData);

  const name = infoData.name;
  const level = infoData.level;

  console.log("name:", name, "level:", level);

  return (
    <div className={styles.bodyComponent}>
      <div>Name: {name}</div>
      <div>Level: {level}</div>
    </div>
  );
}

export default NameOverview;
