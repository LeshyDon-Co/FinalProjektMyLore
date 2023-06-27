"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonone from "@/components/buttons/buttonone/buttonone";


//--------------------------------------------------------//

const CharakterErstellung = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if(session.status === "unauthenticated"){
      router.push("/")
    }else if(session.status === "authenticated"){
      setAuthenticated(true);
    }
  }, [session])

//--------------------------------------------------------//

  const saveCharacter = async (e) => {
    e.preventDefault();

    console.log("hello from CharSave");

    const name = "Waschi1";
    const nation = "Wischi-Waschi-Bär";
    const level = 1;
    const health = 16;
    const attack = 4;
    const defense = 10;
    const characteristic = "Ein sehr arrogantes pummeliges Bärchen";

    try {
      const res = await fetch("/api/auth/character",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          nation,
          level,
          health,
          attack,
          defense,
          characteristic,
        })
    });
    const resdata = await res.json();
    console.log(resdata);
    res.status === 201 
    } catch (error) {
      console.log(error);
    }
}

//--------------------------------------------------------//

if(authenticated){
  return (
    <div className={styles.body}>
      <div className={styles.h2}>
        <h2>Charaktererstellung</h2>
      </div>
      <Charactercard />
      <div className={styles.buttons}>
        <Buttonone text={"<- Charakterübersicht"} link={"/characteroverview"}/>
        <Buttonone text={"Beginne deine Reise ->"}  todo={saveCharacter}/>
        {/* link={"/gameintro"} */}
      </div>
    </div>
  );
};
};


export default CharakterErstellung;
