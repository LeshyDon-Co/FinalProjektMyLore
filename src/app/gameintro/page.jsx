"use client";
import styles from "./page.module.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Buttonone from "@/components/buttons/buttonnormal/buttonnormal";
import Introimage from "@/components/explanation/introimage/introimage";
import Introtext from "@/components/explanation/introtext/introtext";
import React, {useEffect, useState} from "react";

function GameIntro() {
  const router = useRouter();
  const session = useSession();
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    const storedData = localStorage.getItem("userdaten");
    const infoData = JSON.parse(storedData);
    const nation = infoData.nation;
    if (session.data) {
      console.log("session.data", session.data, session);
      const getIntroData = async () => {
        const res = await fetch(`/api/auth/story?nation=${nation}`);
        // console.log("res", res);
        if (!res.ok) {
          throw new Error("Failed Datafetching");
        }

        const data = await res.json();
        setAllData(data);

      };
      getIntroData();

    }
  }, [session]);

  console.log(allData);

  const texts = allData.map((intro) => intro[0].text);

  if (session.status === "unauthenticated") {
    router.push("/");
  } else {
    return (
      <>
        <div className={styles.intro}>
          <h2>Deine Geschichte</h2>
          {/* <Introimage pic={""} /> */}
          <Introtext text1={texts[0]} text2={texts[1]} />
        </div>
      <div className={styles.body}>    
      </div>
      <div className={styles.footer}>
          <Buttonone
            text={"Beginne mit der Rettung der Welt"}
            link={"/game"}
            className={styles.continue}
          />
      </div>
      </>
    );
  }
}
export default GameIntro;
