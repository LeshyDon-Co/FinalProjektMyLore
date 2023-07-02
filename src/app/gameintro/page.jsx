"use client";
import styles from "./page.module.css";
// import Story from "@/assets/storytelling/storyconverter";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import Introimage from "@/components/explanation/introimage/introimage";
import Introtext from "@/components/explanation/introtext/introtext";
import React, {useEffect, useState} from "react";
// import {getTextFromFile} from "@/assets/storytelling/readFile";

function GameIntro() {
  const router = useRouter();
  const session = useSession();
  const [introData, setIntroData] = useState([]);

  const [text, setText] = useState("");

  // const getIntroData = async () => {
  //   const res = await fetch("/api/auth/story", {});
  //   console.log("res", res);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const fileText = await getTextFromFile();
  //       setText(fileText);
  //     } catch (error) {
  //       console.error("Fehler beim Lesen der Datei:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

  useEffect(() => {
    if (session.data) {
      console.log("session.data", session.data, session);
      const getIntroData = async () => {
        const res = await fetch("/api/auth/story", {});
        console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        const data = await res.json();
        setIntroData(data);
        introData.map((intro) => {
          intro.text;
          setText(intro.text);
        });
        // console.log("setIntroData", introData.text);
      };
      getIntroData();
      // console.log("getIntroData", getIntroData(text));
    }
  }, [session]);

  console.log("introData", introData);
  if (session.status === "unauthenticated") {
    router.push("/");
  } else {
    return (
      <div className={styles.body}>
        {/* <Story /> */}
        <div className={styles.h2}>
          <h2>Game-Intro</h2>
        </div>
        <div className={styles.intro}>
          <Introimage pic={"Image"} />
          {/* <div>
            {introData.map((intro, index) => {
              return (
                <div className={styles.text} key={index}>
                  {intro.text}
                </div>
              );
            })}
          </div> */}
          {/* <div>{text}</div> */}

          <Introtext text={text} />
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
}
export default GameIntro;
