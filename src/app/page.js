import MyLore from '@/components/myloretitle/myloretitle';
import Image from 'next/image';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.maincontainer}>
      <MyLore/>
    </main>
  )
}