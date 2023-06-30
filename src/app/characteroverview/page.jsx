"use client";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import NewCharCard from "@/components/cards/newChar/newcharcard";
// import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";


const play = () => {
  //Prüfen, welcher Charakter gewählt wurde, mit diesem
  //dann auf die Spieleseite weiterleiten
}

function CharakterÜbersicht() {

  const router = useRouter();
  const session = useSession(); 
  const [chardata, setChardata] = useState([]);

  useEffect(() => {
    if(session.data){
      const getCharData = async () => {
        const res = await fetch("/api/auth/character", {
          // cache: "no-store",
        });

        if(!res.ok){
          throw new Error("Failed Datafetching")
        };

        const data = await res.json();        
        setChardata(data);
       }   
       getCharData();

    }
  }, [session]);

  console.log(chardata);
  if (session.status === "unauthenticated") {
    router.push("/");
   } else {
    return (
      <div className={styles.body}>        
        <div className={styles.characteroverviewtitle}></div>
        <div className={styles.container}>
          <div className={styles.charlist}>
            <div>
              {chardata.map((char, index) => {
                return <div 
                          className={styles.listitem} 
                          key={index}
                          onClick={play}
                          >
                          {char.name}, {char.nation}, Level {char.level}                          
                        </div>;
              })}
            </div>            
          </div>
          <NewCharCard/>
        </div>
        {/* <Buttonone text={"weiter spielen"} /> */}
      </div>
    );
  }}


export default CharakterÜbersicht;
