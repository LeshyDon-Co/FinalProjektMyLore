"use client";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import Listitem from "@/components/Listitem/listitem";
// import Charactercard from "@/components/cards/charactercard/charactercard";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import React, {useEffect, useState} from "react";
import styles from "./page.module.css";

//----------------------------------------------------------------------------------------//

const CharakterÜbersicht = () => {
  const router = useRouter();
  const session = useSession();
  const [chardata, setChardata] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  //----------------------------------------------------------------------------------------//

  const getCharData = async () => {
    const res = await fetch("/api/auth/character", {
      // cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed Datafetching");
    }

    const data = await res.json();
    setChardata(data);
    console.log("chardata", chardata);
  };

  //----------------------------------------------------------------------------------------//

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
    console.log("selected Char:", selectedItemIndex);
  };

  //----------------------------------------------------------------------------------------//

  const playWithCharacter = async (id) => {
    //was mache ich mit der ID?
    router.push("/game");
  };
  //----------------------------------------------------------------------------------------//

  const deleteCharacter = async (id) => {
    try {
      await fetch(`/api/auth/character/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
    getCharData();
  };

  //----------------------------------------------------------------------------------------//

  useEffect(() => {
    if (session.data) {
      getCharData();
    }
  }, [session]);

  //----------------------------------------------------------------------------------------//

  console.log(chardata);

  if (session.status === "unauthenticated") {
    router.push("/");
  } else {
    return (
      <div className={styles.body}>
        {/* <h1 className={styles.characteroverviewtitle}></h1> */}
        <div className={styles.container}>
          <div className={styles.charlist}>
            <p>Deine Charaktere:</p>
            <div>
              {chardata.map((char, index) => {
                return (
                  <Listitem
                    key={index}
                    index={index}
                    name={char.name}
                    nation={char.nation}
                    level={char.level}
                    onItemClick={handleItemClick}
                    isSelected={selectedItemIndex === index}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.buttoncontainer}>
            <button
              className={styles.playbutton}
              onClick={() => playWithCharacter(chardata[selectedItemIndex]._id)}
            >
              spielen
            </button>
            <button
              className={styles.deletebutton}
              onClick={() => deleteCharacter(chardata[selectedItemIndex]._id)}
            >
              löschen
            </button>
          </div>
          <div
            className={styles.card}
            onClick={() => router.push("/charactercreation")}
          >
            <p>Neuen Charakter erstellen</p>
            <p>+</p>
          </div>
        </div>
      </div>
    );
  }
};

export default CharakterÜbersicht;

//Für jeden Charakter, den der User bereits erstellt hat, wird eine Card angezeigt
//Immer die letze Card ist die "Neuen Charakter erstellen"- Karte -> leitet zu /charaktercreateion weiter
