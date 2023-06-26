import React from "react";
import styles from "./introtext.module.css";

function Introtext(props) {
  const {text} = props;
  return <div className={styles.introtext}>{text}</div>;
}

export default Introtext;
