import React from "react";
import styles from "./page.module.css";
import Karussel from "@/components/karussel/karussel";
// import MyLore from '../assets/my-lore-schriftzug.png';
// import Image from 'next/image';
//import dynamic from "next/dynamic";
//const Karussel = dynamic(() => import("@/components/karussel/karussel"), { ssr: false });

function Gallery() {
  return (
    <div className={styles.body}>
      <main className={styles.maincontainer}>
        {/* <Image
          className={styles.myloretitle}
          src={MyLore}
          width={800}
          height={800}
          alt="Name of the game as Logo in 3D"
        /> */}
        <Karussel/>
      </main>
    </div>
  );
};

export default Gallery;







