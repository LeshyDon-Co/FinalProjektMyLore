import React from "react";
import styles from "./charactercard.module.css";

function CharacterCard() {
  return (
    <div className={styles.body}>
      <div className={styles.slideContainer}>
        <div className={styles.wrapper}>
          <div className={styles.clashCard + " " + styles.axolotl}>
            <div
              className={styles.clashCardImage + " " + styles.axolotlImage}
            >
              <img
                src="https://www.istockphoto.com/de/foto/axolotl-in-vor-ein-wei%C3%9Fer-hintergrund-gm508416596-85256327"
                alt="axolotl"
              />
            </div>
            <div
              className={styles.clashCardLevel + " " + styles.axolotlLevel}
            >
              Level 4
            </div>
            <div className={styles.clashCardUnitName}>Axolittle</div>
            <div className={styles.clashCardUnitDescription}>
              The axolotl is quite cute
            </div>

            <div
              className={
                styles.clashCardUnitStats +
                " " +
                styles.axolotlStats +
                " " +
                styles.clearfix
              }
            >
              <div className={styles.oneThird}>
                <div className={styles.stat}>
                  20<sup>S</sup>
                </div>
                <div className={styles.statValue}>Training</div>
              </div>

              <div className={styles.oneThird}>
                <div className={styles.stat}>16</div>
                <div className={styles.statValue}>Speed</div>
              </div>

              <div className={styles.oneThird + " " + styles.noBorder}>
                <div className={styles.stat}>150</div>
                <div className={styles.statValue}>Cost</div>
              </div>
            </div>
          </div>
          {/* <!-- end clashCard axolotl--> */}
        </div>
       
      </div>
    </div>
  );
}

export default CharacterCard;
