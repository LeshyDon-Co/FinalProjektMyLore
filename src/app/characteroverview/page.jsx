"use client";
import Buttonone from "@/components/buttons/buttonone/buttonone";
import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React from "react";
import styles from "./page.module.css";

<<<<<<< HEAD

//------------------------------------------------------//

//Hier muss später nach den Charakteren für den eingeloggten Usergesucht werden
async function getData(){
  const res = await fetch("http://localhost:3000/api/auth/character",{cache: "force-cache"});
  if(!res.ok){
    throw new Error("Failed to fetch data!");
  };

  return res.json();
};
//------------------------------------------------------//

const CharakterÜbersicht = async() => {
=======
function CharakterÜbersicht() {
>>>>>>> develop
  const session = useSession();
  const router = useRouter();
  const data = await getData();
  console.log(data);


  // if(session.status === "unauthenticated"){
  //   router?.push("/loginandregister");
  // }else{
  return (
    <div className={styles.body}>
      <h1 className={styles.characteroverviewtitle}>Charakterübersicht</h1>
      <div className={styles.container}>
        <div className={styles.charlist}>
          <p>Deine Charaktere:</p>
          {data.map((character)=>(
            <div className={styles.listitem} key={character._id}>
              Name: {character.charname}
              Rasse:{character.nation}
              Level: {character.level}
             </div>
          ))}
          
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
