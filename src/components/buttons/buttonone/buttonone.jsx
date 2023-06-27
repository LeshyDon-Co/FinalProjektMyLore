import React from 'react';
import styles from "./buttonone.module.css";

function Buttonone(props) {
    const {link, text, todo} = props;
  return (
    <button onClick={todo} className={styles.buttonone}><a href={link}>{text}</a></button>
  )
}

export default Buttonone;