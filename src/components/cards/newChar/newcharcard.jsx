"use client";

import { useRouter } from "next/navigation";
import styles from "./newcharcard.module.css";


function NewCharCard() {

    const router = useRouter();

  return (
    <div    className={styles.newcharcard} 
            onClick={() => router.push("/charactercreation")}>
        <p>Charakter erstellen</p>
        <p>+</p>


    </div>
  );
}

export default NewCharCard;
