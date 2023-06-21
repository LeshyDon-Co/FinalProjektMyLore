import React from "react";
import styles from "./page.module.css";

function CharakterErstellung() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        Rechts sieht man die bereits vorhandenen Charaktere, links kann man
        einen neuen erstellen und wir zur CharakterErstellungs-eite
        weitergeleitet
      </div>
    </div>
  );
}

export default CharakterErstellung;
