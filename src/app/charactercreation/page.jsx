"use client";
import React from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonone from "@/components/buttons/buttonone/buttonone";

function CharakterErstellung () {

  const router = useRouter();
  const session = useSession();

  if(session.status === "unauthenticated"){
    router.push("/");
  }else{
  return (
    <div className={styles.body}>
      <div className={styles.h2}>
        <h2>Charaktererstellung</h2>
      </div>
      <Charactercard />
      <div className={styles.buttons}>
        <Buttonone text={"<- Charakterübersicht"} link={"/characteroverview"} />
        <Buttonone text={"Beginne deine Reise ->"} link={"/gameintro"} />
      </div>
    </div>
  );
};
};

export default CharakterErstellung;
