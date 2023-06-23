"use client";
//Inspiration: https://codepen.io/drehimself/pen/QNXpyp
import styles from "./charactercard.module.css";
// import {Card, Grid, Row, Text, Col} from "@nextui-org/react";

function Charactercard() {
  const list = [
    {
      name: "Maddy",
      img: "/images/fruit-1.jpeg",
      text: "",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Claudi",
      img: "/images/fruit-1.jpeg",
      text: "",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Lion",
      img: "/images/fruit-1.jpeg",
      text: "",
      attribute1: "attribute1",
      value1: "value1",
      attribute2: "attribute2",
      value2: "value2",
      attribute3: "attribute3",
      value3: "value3",
    },
    {
      name: "Neuer Character",
      img: "",
      text: "",
      attribute1: "",
      value1: "",
      attribute2: "",
      value2: "",
      attribute3: "",
      value3: "",
    },
  ];

  return (
    <div className={styles.bodyComponent}>
      <div className={styles.allCards}>
        {list.map((item, index) => (
          <div className={styles.allOfCard} key={index}>
            <div className={styles.image}></div>
            <div className={styles.card}>
              <div className={styles.header}></div>
              <div className={styles.body}>{item.name}</div>
              <div className={styles.footer}>
                <div>
                  {item.attribute1} {item.value1}
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Charactercard;
