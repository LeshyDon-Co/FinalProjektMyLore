import React from 'react';
import styles from "./page.module.css";

function Impressum() {
  return (
    <div className={styles.body}>
        <div className={styles.personalRoll}>
            <div className={styles.h2maddy}></div>
            <p><a href="https://portfoliomadeline.netlify.app/">Portfolio</a></p>
            <p><a href="https://github.com/LeshyaLine">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/madeline-streubel-0b6304250/">LinkedIn</a></p>
            <p><a href="https://www.instagram.com/day_to_day_dog/">Instagram</a></p>
        </div>
        <div className={styles.personalRoll}>
            <div className={styles.h2claudi}></div>
            {/* <p><a href="">Portfolio</a></p> */}
            <p><a href="https://www.instagram.com/artistoo._.cat/">Instagram</a></p>
            <p><a href="https://github.com/Siick-CattoO">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/claudia-j-m">LinkedIn</a></p>
        </div>
        <div className={styles.personalRoll}>
            <div className={styles.h2lion}></div>
            <p><a href="https://portfolion-one.vercel.app/index.html">Portfolio</a></p>
            <p><a href="https://www.instagram.com/moeweschwoertloewehoert/">Instagram</a></p>
            <p><a href="https://github.com/N0i7">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/lion-j%C3%BCdes-11b925237/">LinkedIn</a></p>
        </div>
        <div className={styles.personalRoll}>
            <div className={styles.h2steven}></div>
            <p><a href="https://portfolio-don-strevo.vercel.app/">Portfolio</a></p>
            <p><a href="https://github.com/Don-Strevo">GitHub</a></p>
            <p><a href="https://www.linkedin.com/in/steven-günther-0a993224b">LinkedIn</a></p>
        </div>
    </div>
  )
}

export default Impressum