"use client";
//Inspiration: https://codepen.io/drehimself/pen/QNXpyp
import styles from "./charactercard.module.css";
import Image from "next/image";

//Bilder
import WischiWaschi from "/home/dci-student/Schreibtisch/Games/FinalProjektMyLore/finalprojektmylore/src/assets/characterimages/WischiWaschiBaer.png";

function Charactercard() {
  const list = [
    {
      name: "Wischi-Waschi-Bär",
      img: (
        <Image
          src="/WischiWaschiBaer.png"
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),
      text: "Wisch wasch, wasch willscht du?",
      attribute1: "ATK",
      value1: "value1",
      attribute2: "DEF",
      value2: "value2",
      attribute3: "HP",
      value3: "value3",
    },
    {
      name: "Flammenko (comming soon)",
      img: (
        <Image
          src={WischiWaschi}
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),
      text: "Ich habe Hunger, gib mir einen Lappen!",
      attribute1: "ATK",
      value1: "value1",
      attribute2: "DEF",
      value2: "value2",
      attribute3: "HP",
      value3: "value3",
    },
    {
      name: "Axolilalittle  (comming soon)",
      img: (
        <Image
          src={WischiWaschi}
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),
      text: "Willst du spielen? Habe meine Krallen frisch geschärft!",
      attribute1: "ATK",
      value1: "value1",
      attribute2: "DEF",
      value2: "value2",
      attribute3: "HP",
      value3: "value3",
    },
    // {
    //   name: "",
    //   img: "",
    //   text: "",
    //   attribute1: "",
    //   value1: "",
    //   attribute2: "",
    //   value2: "",
    //   attribute3: "",
    //   value3: "",
    // },
  ];

  return (
    <div className={styles.bodyComponent}>
      {list.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.imagecontainer}>
            {item.img}
            {/* <Image
              src={item.img}
              alt={item.name}
              width={400}
              height={400}
              //fill={true}
              className={styles.wiwa}
            /> */}
          </div>
          <div className={styles.main}>
            {item.name} <p className={styles.p}>{item.text}</p>
          </div>
          <div className={styles.footer}>
            <div className={styles.attributes}>
              <div className={styles.attribute}>{item.attribute1}</div>
              <div className={styles.value}>{item.value1}</div>
            </div>
            <div className={styles.attributes}>
              <div className={styles.attribute}>{item.attribute2}</div>
              <div className={styles.value}>{item.value2}</div>
            </div>
            <div className={styles.attributes}>
              <div className={styles.attribute}>{item.attribute3}</div>
              <div className={styles.value}>{item.value3}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Charactercard;
