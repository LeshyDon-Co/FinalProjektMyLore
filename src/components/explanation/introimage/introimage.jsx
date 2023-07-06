import React from "react";
import styles from "./introimage.module.css";
import Image from "next/image";

function Introimage(props) {
  const {pic} = props;
  return( <div className={styles.imagecontainer }>
            <div className={styles.introimage}>{pic}</div>
          </div>
)};

export default Introimage;
