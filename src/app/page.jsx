import MyLore from '../assets/my-lore-schriftzug.png';
import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.maincontainer}>
      <Image
        className={styles.myloretitle}
        src={MyLore}
        width={800}
        height={800}
        alt="Name of the game as Logo in 3D"
      />
    </main>
  )
}