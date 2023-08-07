"use client";
import styles from "./page.module.css";
import NameOverview from "@/components/overview/name/nameoverview";
import Location from "@/components/overview/location/location";
import Quests from "@/components/quests/quests";
import {useRouter} from "next/navigation";
import {useSession} from "next-auth/react";
import React, {useEffect, useState} from "react";

function Questlog() {
  const router = useRouter();
  const session = useSession();
  const [questData, setQuestData] = useState([]);

  //--------------------------------------------------------//

  // const getQuestData = async () => {
  //   const res = await fetch("/api/auth/quest", {
  //     // cache: "no-store",
  //   });

  //   if (!res.ok) {
  //     throw new Error("Failed Datafetching");
  //   }

  // const data = await res.json();
  //   setQuestData(data);
  //   console.log("questData", questData);
  // };

  // //----------------------------------------------------------//

  // useEffect(() => {
  //   if (session.data) {
  //     getQuestData();
  //   }
  // }, [session]);

  //----------------------------------------------------------//

  return (
    <div className={styles.body}>
      <div className={styles.nameAndLocation}>
        <div className={styles.name}>
        <NameOverview />
        </div>
        <div className={styles.location}>
        <Location />
        </div>
      </div>
      <div className={styles.container}>
        <Quests />
      </div>
    </div>
  );
}

export default Questlog;
