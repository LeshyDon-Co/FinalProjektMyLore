"use client";
import React from "react";
import styles from "./page.module.css";
import Charactercard from "@/components/cards/charactercard/charactercard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function CharakterErstellung() {
  const session = useSession();
  const router = useRouter()
  
  if(session.status === "unauthenticated"){
    router?.push("/loginandregister")
  }else{
  return (
    <div className={styles.body}>
      <div className={styles.h2}>
        <h2>Charaktererstellung</h2>
      </div>
      <div className={styles.container}>
        <Charactercard />
      </div>
      <div className={styles.button}>
        <button>Geschichte schreiben</button>
      </div>
    </div>
  );
  };
};

export default CharakterErstellung;
