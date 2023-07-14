import React from 'react';
import styles from "./questlistitem.module.css";

//---------------------------------------------------------//

function Questlistitem(props) {

    const {index, title} = props;

//---------------------------------------------------------//

    return (
    <div
     className={styles.questlistitem}
     key={index}
     >
      {title}
    </div>
  )
}

export default Questlistitem;