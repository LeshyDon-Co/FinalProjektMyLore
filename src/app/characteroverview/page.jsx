"use client";
import Buttonone from "@/components/buttons/buttonone/buttonone";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React from "react";
import styles from "./page.module.css";

function CharakterÜbersicht() {
  const session = useSession();
  const router = useRouter();

  // if(session.status === "unauthenticated"){
  //   router?.push("/loginandregister");
  // }else{
  return (
    <div className={styles.body}>
      <h1 className={styles.characteroverviewtitle}>Charakterübersicht</h1>
      <div className={styles.container}>
        <div className={styles.charlist}>
          <p>Deine Charaktere:</p>
          <div className={styles.listitem}>item</div>
          <div className={styles.listitem}>item</div>
          <div className={styles.listitem}>item</div>
          <div className={styles.listitem}>item</div>
          <div className={styles.listitem}>item</div>
          <div className={styles.listitem}>item</div>
        </div>
        <div
          className={styles.card}
          onClick={() => router.push("/charactercreation")}
        >
          <p>Neuen Charakter erstellen</p>
          <p>+</p>
        </div>
      </div>
      <Buttonone text={"weiter spielen"} link={"/charactercreation"} />
    </div>
  );
}
// };

export default CharakterÜbersicht;

//Für jeden Charakter, den der User bereits erstellt hat, wird eine Card angezeigt
//Immer die letze Card ist die "Neuen Charakter erstellen"- Karte -> leitet zu /charaktercreateion weiter
