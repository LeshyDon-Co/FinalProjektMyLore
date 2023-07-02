"use client";

import React, {useEffect, useState} from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";

//--------------------------------------------------------//

const CharakterErstellung = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();
  const session = useSession();
  const [isClicked, setIsClicked] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [clickedCard, setClickedCard] = useState({name: ""});

  console.log(session);
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/");
    } else if (session.status === "authenticated") {
      setAuthenticated(true);
    }
  }, [session]);

//--------------------------------------------------------//

if (authenticated) {

    const validateAndSaveCharacter = async (e) => {
      e.preventDefault();

      if (!characterName || clickedCard.name === "") {
        console.log("Kein Name eingegeben oder Karte ausgewählt");
      } else {
        console.log("speichere Charakterdaten...");

        console.log(session.data.user.email);
        const name = characterName;
        const nation = clickedCard.nation;
        const level = 1;
        const health = clickedCard.value1;
        const attack = clickedCard.value2;
        const defense = clickedCard.value3;
        const stadium = clickedCard.stadium;
        const characteristic = clickedCard.characteristic;
        const createdBy = session.data.user.email;

        try {
          const res = await fetch("/api/auth/character", {
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
              stadium,
              characteristic,
              createdBy,
            }),
          });
          const resdata = await res.json();
          console.log(resdata);
          res.status === 201;
        } catch (error) {
          console.log(error);
        }

        router.push("/gameintro");
      }
    };

    //--------------------------------------------------------//

    // if(authenticated){
    // const validate = () => {
    //   if (!characterName || clickedCard.name === "") {
    //     console.log("Kein Name eingegeben oder Karte ausgewählt");
    //   } else {
    //     router.push("/gameintro");
    //   }
    // };

    // if(session.status === "unauthenticated"){
    //   router.push("/");
    // }else{
    return (
      <div 
        className={
          clickedCard.name === "Wischi-Waschi-Bär" ? styles.bodyAxolittle :
          clickedCard.name === "Flammengo" ? styles.bodyFlammengo :
          clickedCard.name === "Axolittle" ? styles.bodyAxolittle :
          styles.body}
        >
        <div className={styles.h2}>
          <h2>Charaktererstellung</h2>
        </div>
        <Charactercard
          clickedCard={clickedCard}
          setClickedCard={setClickedCard}
        />
        <div className={styles.footer}>
          <Buttonone
            text={"<- Charakterübersicht"}
            link={"/characteroverview"}
          />
          <div>
            <form>
              <input
                value={characterName}
                className={styles.input}
                placeholder="Username"
                onChange={(e) => setCharacterName(e.target.value)}
              />
            </form>
          </div>
          <Buttonone
            text={"Beginne deine Reise ->"}
            todo={validateAndSaveCharacter}
          />
        </div>
      </div>
    );
  }
};

export default CharakterErstellung;
