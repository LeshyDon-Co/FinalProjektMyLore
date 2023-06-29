import styles from "./page.module.css";
import Story from "@/assets/storytelling/story";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import Introtext from "@/components/explanation/introtext/introtext";
import React from "react";

function GameIntro() {
  return (
    <div className={styles.body}>
      <Story />
      <div>
        <div className={styles.introtext}></div>
        <Introtext text={"moinmoin"} />
        <Buttonone text={"Rette die Welt ->"} link={"/game"} />
      </div>
    </div>
  );
}

export default GameIntro;
