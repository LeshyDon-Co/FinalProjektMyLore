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
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/axolotl.png"
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
              The axolotl is a kiltclad Scottish warrior with an angry,
              battleready expression, hungry for destruction. He has Killer
              yellow horseshoe mustache.
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
        <!-- end wrapper --> */}

        <div className={styles.wrapper}>
          <div className={styles.clashCard + " " + styles.wischiwaschibär}>
            <div className={styles.clashCardImage + " " + styles.wischiwaschibärImage}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wischiwaschibär.png"
                alt="wischiwaschibär"
              />
            </div>
            <div className={styles.clashCardLevel + " " + styles.wischiwaschibärLevel}>
              Level 5
            </div>
            <div className={styles.clashCardUnitName}>WischiWaschiBär</div>
            <div className={styles.clashCardUnitDescription}>
              The wischiwaschibär is a female warrior with sharp eyes. She wears a short,
              light green dress, a hooded cape, a leather belt and an attached
              small pouch.
            </div>

            <div
              className={
                styles.clashCardUnitStats +
                " " +
                styles.wischiwaschibärStats +
                " " +
                styles.clearfix
              }
            >
              <div className={styles.oneThird}>
                <div className={styles.stat}>
                  25<sup>S</sup>
                </div>
                <div className={styles.statValue}>Training</div>
              </div>

              <div className={styles.oneThird}>
                <div className={styles.stat}>24</div>
                <div className={styles.statValue}>Speed</div>
              </div>

              <div className={styles.oneThird + " " + styles.noBorder}>
                <div className={styles.stat}>300</div>
                <div className={styles.statValue}>Cost</div>
              </div>
            </div>
          </div>
          {/* <!-- end clashCard wischiwaschibär--> */}
        </div>
        {/* <!-- end wrapper --> */}

        <div className={styles.wrapper}>
          <div className={styles.clashCard + " " + styles.flamongo}>
            <div className={styles.clashCardImage + " " + styles.flamongoImage}>
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/flamongo.png"
                alt="flamongo"
              />
            </div>
            <div className={styles.clashCardLevel + " " + styles.flamongoLevel}>
              Level 5
            </div>
            <div className={styles.clashCardUnitName}>Flamongo</div>
            <div className={styles.clashCardUnitDescription}>
              Slow, steady and powerful, flamongos are massive warriors that soak
              up huge amounts of damage. Show them a turret or cannon and you'll
              see their fury unleashed!
            </div>

            <div
              className={
                styles.clashCardUnitStats +
                " " +
                styles.flamongoStats +
                " " +
                styles.clearfix
              }
            >
              <div className={styles.oneThird}>
                <div className={styles.stat}>
                  2<sup>M</sup>
                </div>
                <div className={styles.statValue}>Training</div>
              </div>

              <div className={styles.oneThird}>
                <div className={styles.stat}>12</div>
                <div className={styles.statValue}>Speed</div>
              </div>

              <div className={styles.oneThird + " " + styles.noBorder}>
                <div className={styles.stat}>2250</div>
                <div className={styles.statValue}>Cost</div>
              </div>
            </div>
          </div>
          {/* <!-- end clashCard flamongo-->
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
