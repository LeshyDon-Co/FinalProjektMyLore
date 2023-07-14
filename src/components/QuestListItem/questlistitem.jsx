import React from 'react';
import styles from "./questlistitem.module.css";

//---------------------------------------------------------//

function Questlistitem(props) {

    const {index, title, onItemClick, isSelected} = props;

//---------------------------------------------------------//

    const handleClick = () => {
      onItemClick(index);
      console.log("index listItem:", index);
    };

//---------------------------------------------------------//

    return (
    <div
    className={`${styles.questlistitem} ${isSelected ? styles.selected : ""}`}
    onClick={handleClick}
    key={index}
     >
      {title}
    </div>
  )
}

export default Questlistitem;