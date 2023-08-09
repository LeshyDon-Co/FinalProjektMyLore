import styles from "./itemholder.module.css";
import React from "react";
import Image from "next/image";

function ItemHolder(props) {

  const {name, pic, price, text, type, id, mykey} = props;

  const equipitem = async (e) => {
    console.log("Doppelgeklickt!", mykey);

    //Ich habe jetzt die Itemid, des angeklickten items
    //Diese möchte ich in das equipedItemArray schreiben

    //WIE??????

    // try {
    //   await fetch(`/api/auth/character/${charid}`, {
    //     method: "UPDATE",
    //   });
    // } catch (error) {
    //   console.log(error);
    // };
  }

  return <div className={styles.items} onDoubleClick={equipitem}>
    <Image
      src={pic} 
      mykey={mykey}
      id={id}
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
