
"use client";
import MyLore from '../assets/my-lore-schriftzug.png';
import Image from 'next/image';
import styles from "./page.module.css";
import { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';


export default function Home() {

  const session = useSession();
  console.log(session);

  return (

    <div className={styles.body}>
      <main className={styles.maincontainer}>
        <Image
          className={styles.myloretitle}
          src={MyLore}
          width={800}
          height={800}
          alt="Name of the game as Logo in 3D"
        />
      </main>
    </div>
  );
}
