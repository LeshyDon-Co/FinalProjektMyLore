// "use client";
import MyLore from '../assets/my-lore-schriftzug.png';
import Image from 'next/image';
import styles from "./page.module.css";
import "tw-elements/dist/css/tw-elements.min.css";
import "tw-elements";
import { useEffect } from 'react';
// import { signOut, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';


export default function Home() {

  //Kann raus, war nur zum testen
  // const router = useRouter();
  // const session = useSession();
  // console.log(session);
  // if(session.status === "authenticated"){
  //   router.push("/characteroverview");
  // }else{
    useEffect(() => {
      const use = async () => {
        (await import('tw-elements')).default;
      };
      use();
    }, []);
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
};

