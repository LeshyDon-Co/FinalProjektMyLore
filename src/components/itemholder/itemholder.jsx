import styles from "./itemholder.module.css";
import React from "react";
import Image from "next/image";

//Bildimporte
//import Testpic from "../../assets/items/testitem.png";

function ItemHolder(props) {

  const {name, pic, price, text, type, id} = props;

  return <div className={styles.items}>
    <Image 
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
        <p className={styles.contentprice}>Preis: {price} Gold</p>
      </div>
    </div>;
}

export default ItemHolder;
