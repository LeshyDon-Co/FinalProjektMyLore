"use client";
import styles from "./itemholder.module.css";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function ItemHolder(props) {

  const {name, pic, price, text, type, id, mykey} = props;
  const [charID, setCharID] = useState("");

//----------------------------------------------------------//
 
  useEffect(() =>{

    const userdata = localStorage.getItem("userdaten");
    const userdataparsed = JSON.parse(userdata);
    setCharID(userdataparsed._id);
    
  },[])

//----------------------------------------------------------//

  const equipitem = async (e) => {
    console.log("Doppelgeklickt!", mykey);
    console.log(charID);

    //Ich habe jetzt die Itemid, des angeklickten items
    //Diese möchte ich in das equipedItemArray schreiben

    // in res die equipted items zurück bekommen

    // try {
    //  const res =  await fetch(`/api/auth/character/${charID}`, {
    //     method: "UPDATE",
    //   });
    //   console.log(res);
    // } catch (error) {
    //   console.log(error);
    // };
  }
  
//----------------------------------------------------------//

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
