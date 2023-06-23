import React from 'react';
import styles from "./buttonone.module.css";

function Buttonone(props) {
    const {link, text} = props;
  return (
    <button className={styles.buttonone}><a href={link}>{text}</a></button>
  )
}

export default Buttonone;