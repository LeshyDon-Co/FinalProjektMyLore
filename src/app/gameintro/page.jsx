import styles from "./page.module.css";
import Story from "@/assets/storytelling/storyconverter";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import Introimage from "@/components/explanation/introimage/introimage";
import Introtext from "@/components/explanation/introtext/introtext";
import React from "react";
import * as story from "../../assets/storytelling/maindata.json";

// const mainStory = {textMainStory};

function GameIntro() {
  return (
    <div className={styles.body}>
      {/* <Story /> */}
      <div className={styles.h2}>
        <h2>Game-Intro</h2>
      </div>
      <div className={styles.intro}>
        <Introimage pic={"Image"} />
        <Introtext text={"Text"} />
      </div>
      <div className={styles.footer}>
        <div></div>
        <Buttonone
          text={"Beginne mit der Rettung der Welt ->"}
          link={"/game"}
          className={styles.continue}
        />
      </div>
    </div>
  );
}

export default GameIntro;
