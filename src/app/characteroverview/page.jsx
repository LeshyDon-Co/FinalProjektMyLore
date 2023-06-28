"use client";
import Buttonone from "@/components/buttons/buttonone/buttonone";
// import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";

// async function getCharData(){
//   const res = await fetch("http://localhost:3000/api/auth/character/");
  
//   if(!res.ok){
//     throw new Error("Failed to fetch Data");
//   }

//   return res.json();
// };

const CharakterÜbersicht = async() => {

  const router = useRouter();
  const session = useSession(); 
  const [chardata, setChardata] = useState("")

  useEffect(() => {
    const getCharData = async () => {
      const res = await fetch("/api/auth/character");

      if(!res.ok){
        throw new Error("Failed Datafetching")
      }

      const data = await res.json();
      setChardata(data);
    }
    getCharData()
  }, []);


  if(session.status === "unauthenticated"){
    router.push("/");
  }else{
  return (
    <div className={styles.body}>
      <h1 className={styles.characteroverviewtitle}>Charakterübersicht</h1>
      <div className={styles.container}>
        <div className={styles.charlist}>
          <p>Deine Charaktere:</p>
          {chardata?.map((char) => {
            return<div key={char.id} className={styles.listitem}>{char.name}, {char.email}</div>
          })}
        </div>
        <div
          className={styles.card}
          onClick={() => router.push("/charactercreation")}
        >
          <p>Neuen Charakter erstellen</p>
          <p>+</p>
        </div>
      </div>
      <Buttonone text={"weiter spielen"} />
    </div>
  );
};
};

export default CharakterÜbersicht;

//Für jeden Charakter, den der User bereits erstellt hat, wird eine Card angezeigt
//Immer die letze Card ist die "Neuen Charakter erstellen"- Karte -> leitet zu /charaktercreateion weiter