"use client";
import Charactercard from "@/components/charactercard/charactercard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import styles from "./page.module.css";

function CharakterÜbersicht() {

  const session = useSession();
  const router = useRouter();

  if(session.status === "unauthenticated"){
    router?.push("/loginandregister");
  }else{
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h1 className={styles.characteroverviewtitle}>Charakterübersicht</h1>
        <div className={styles.charactercardscontainer}>
          <Charactercard></Charactercard>
          <Charactercard></Charactercard>

        </div>
      </div>
    </div>
  );
  };
};

export default CharakterÜbersicht;

//Für jeden Charakter, den der User bereits erstellt hat, wird eine Card angezeigt
//Immer die letze Card ist die "Neuen Charakter erstellen"- Karte -> leitet zu /charaktercreateion weiter
