import React from "react";
import styles from "./introtext.module.css";

function Introtext(props) {
  const {text1, text2} = props;
  return (
    <div className={styles.introtext}>
      {text1}
      <br />
      <br />
      <br />
      {text2}
    </div>
  );
}

export default Introtext;
