"use client";

import styles from "./nameoverview.module.css";
import React, { useEffect, useState } from "react";

function NameOverview() {


  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  // console.log(props);
  // const {storedData, setStoredData} = props;

  useEffect(() => {
    const storedData = localStorage.getItem("userdaten") || "";
    const infoData = JSON.parse(storedData);
    setName(infoData.name);
    setLevel(infoData.level); 
  },[])


  return (
    <div className={styles.bodyComponent}>
      <div>Name: {name}</div>
      <div>Level: {level}</div>
    </div>
  );
}

export default NameOverview;
