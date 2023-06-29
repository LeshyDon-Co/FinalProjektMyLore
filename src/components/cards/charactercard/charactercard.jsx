"use client";
//Inspiration: https://codepen.io/drehimself/pen/QNXpyp
import styles from "./charactercard.module.css";
import Image from "next/image";
import {useState} from "react";

//Bilder

import WischiWaschi from "../../../assets/characterimages/WischiWaschiBaer.png";

function Charactercard(props) {
  console.log(props);

  const {clickedCard, setClickedCard} = props;
  const list = [
    {
      name: "Wischi-Waschi-Bär",
      img: (
        <Image
          priority={true}
          alt=""
          src={WischiWaschi}
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),

      text: "Wisch wasch, wasch willscht du?",
      attribute1: "HP",
      value1: "16",
      attribute2: "ATK",
      value2: "4",
      attribute3: "DEF",
      value3: "10",
      grad: "extrem ",
      special: "arrogant",
    },
    {
      name: "Flammengo",
      img: (
        <Image
          priority={true}
          alt=""
          src={WischiWaschi}
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),
      text: "Ich habe Hunger, gib mir Lappen!",
      attribute1: "HP",
      value1: "20",
      attribute2: "ATK",
      value2: "5",
      attribute3: "DEF",
      value3: "5",
      grad: "extrem ",
      special: "gierig",
    },
    {
      name: "Axolilalittle",
      img: (
        <Image
          priority={true}
          alt=""
          src={WischiWaschi}
          width={400}
          height={400}
          // fill={true}
          className={styles.wiwa}
        />
      ),
      text: "Willst du spielen? ",
      attribute1: "HP",
      value1: "15",
      attribute2: "ATK",
      value2: "9",
      attribute3: "DEF",
      value3: "6",
      grad: "extrem ",
      special: "cholerisch",
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

  const [isClicked, setIsClicked] = useState(false);
  function getCharacter(item) {
    console.log(item);
    setClickedCard(item);
    setIsClicked(true);

    // return clickedCard;
    // e.target.classList.remove(styles.card);
    // e.target.classList.add(styles.clickCard);
  }

  // Funktion, die das Inputfeld oder die style-Klasse zur page fetcht, damit dort die Validierung stattfinden kann.

  return (
    <div className={styles.bodyComponent}>
      {list.map((item, index) => (
        <div
          onClick={() => getCharacter(item)}
          className={
            item.name === clickedCard.name ? styles.clickCard : styles.card
          }
          key={index}
        >
          <div className={styles.imagecontainer}>{item.img}</div>
          <div className={styles.main}>
            {item.name} <p className={styles.p}>{item.text}</p>
            <p>
              {item.grad}
              {item.special}
            </p>
          </div>
          <div className={styles.footerchar}>
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
