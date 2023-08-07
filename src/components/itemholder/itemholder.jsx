import styles from "./itemholder.module.css";
import React from "react";
import Image from "next/image";

function ItemHolder(props) {

  const {name, pic, price, text, type, id} = props;

//----------------------------------------------------------//
 
  const equipItem = (e) => {
    console.log("dobbleClick", e.target.id);
    //Hier einbauen, dass das geklickte Item ausgerüstet wird
    //Im model ein Array erstellen, in dem die ausgerüstetten ItemIDs als Referenz gespeichert sind
    //Diese dann beim LAden der Seite abfragen & mit populate "anzeigen und berechnen"
  }

//----------------------------------------------------------//
 
  return <div className={styles.items}
              onDoubleClick={equipItem}
              >
    <Image 
      id={id}
      src={pic} 
      alt="Item" 
      width={61} 
      height={61}
      />
      <div className={styles.content}>
        <Image
              src={pic} 
              alt="Item" 
              width={61} 
              height={61}
        />
        <h1 className={styles.contenth1}>{name}</h1>
        <p className={styles.contenttext}>{text}</p>
        <p className={styles.contentprice}>Preis: {price} Murmeln</p>
      </div>
    </div>;
}

export default ItemHolder;
