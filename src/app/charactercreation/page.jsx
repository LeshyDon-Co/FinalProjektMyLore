"use client";
import React, {useState} from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonnormal from "@/components/buttons/buttonnormal/buttonnormal";

function CharakterErstellung() {
  const router = useRouter();
  const session = useSession();
  const [isClicked, setIsClicked] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [clickedCard, setClickedCard] = useState({name: ""});

  const validate = () => {
    if (!characterName || clickedCard.name === "") {
      console.log("Kein Name eingegeben oder Karte ausgewählt");
    } else {
      router.push("/gameintro");
    }
  };

  // if(session.status === "unauthenticated"){
  //   router.push("/");
  // }else{
  return (
    <div className={styles.body}>
      <div className={styles.h2}>
        <h2>Charaktererstellung</h2>
      </div>
      <Charactercard
        clickedCard={clickedCard}
        setClickedCard={setClickedCard}
      />
      <div className={styles.footer}>
        <Buttonnormal
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
        <Buttonnormal text={"Beginne deine Reise ->"} todo={validate} />
      </div>
    </div>
  );
}
// };

export default CharakterErstellung;
