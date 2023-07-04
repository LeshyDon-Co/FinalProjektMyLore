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
  // const [introData, setIntroData] = useState([]);

  const [allData, setAllData] = useState([]);

  const storedData = localStorage.getItem("userdaten");
  const infoData = JSON.parse(storedData);
  console.log("infoData", infoData);

  console.log("infoDataName:", infoData.name);

  const nation = infoData.nation;
  console.log("nation", nation);

  // const dataTest = {someKey: "someValue", anotherKey: "anotherValue"};
  // localStorage.removeItem("userdaten");
  // console.log("storedData", infoData);
  // const [textChar, setTextChar] = useState("");

  // const [textMain, setTextMain] = useState("");
  // const [test, setTest] = useState("");
  // setTest(router.query);
  // const {name, nation} = router.query;
  // console.log("activChar:", test);

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
        // const queryString = new URLSearchParams(dataTest).toString();
        const res = await fetch(`/api/auth/story?nation=${nation}`);
        console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        const data = await res.json();
        setAllData(data);
        console.log("allData", allData);
        // allData.map((intro) => {
        //   {
        //     intro.text;
        //   }

        //   // setTextMain(textMain1);
        //   // setTextChar(textChar1);
        // });
        // console.log("object1", object1, object2);
        // console.log("setIntroData", introData.text);
      };
      getIntroData();
      // console.log("getIntroData", getIntroData(text));
    }
  }, [session]);

  useEffect(() => {
    console.log(allData);
  }, [allData]);

  const texts = allData.map((intro) => intro[0].text);
  // console.log("texts", texts[1]);
  // console.log("textMain", texts[0]);

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
          <Introtext text1={texts[0]} text2={texts[1]} />
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
