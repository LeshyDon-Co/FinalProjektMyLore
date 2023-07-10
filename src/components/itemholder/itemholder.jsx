import styles from "./itemholder.module.css";
import React from "react";

function ItemHolder(props) {

  const {name, pic, price, text, type, id} = props;
  console.log(name);

  return <div className={styles.items}><img src="/testitem.png" alt="" />{name}</div>;
}

export default ItemHolder;
