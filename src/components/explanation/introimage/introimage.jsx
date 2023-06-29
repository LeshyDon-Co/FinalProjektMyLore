import React from "react";
import styles from "./introimage.module.css";

function Introimage(props) {
  const {text} = props;
  return <div className={styles.introimage}></div>;
}

export default Introimage;
