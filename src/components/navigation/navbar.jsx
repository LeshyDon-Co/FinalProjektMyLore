"use client";
import Link from 'next/link';
import React from 'react';
import styles from "./navbar.module.css";
import { useSession, signOut } from 'next-auth/react';

// Logo (Linke Seite)
import MyLore from '../../assets/my-lore-schriftzug.png';
import Image from 'next/image';

// Fonts
import { titleFont } from '../../app/fonts'

const links = [
  {
    id: 1,
    title: "MyLore-Wiki",
    url: "/gameinfo",
  },
  {
    id: 2,
    title: "Gallery",
    url: "/gallery",
  },
  // {
  //   id: 3,
  //   title: "About",
  //   url: "/about",
  // },
];

//--------------------------------------------------------------------//

const Navbar = () => {

  const session = useSession();

  return (
    <div className={`${styles.container} ${titleFont.className}`}>
        {session.status === "unauthenticated" && (
        <Link href="/" className={styles.logo}>
          <Image
            className={styles.myloretitle}
            src={MyLore}
            width={150}
            height={150}
            alt="Name of the game as Logo in 3D"
          />
      </Link>
      )}
      {session.status === "authenticated" && (
        <Link href="/characteroverview" className={styles.logo}>
        <Image
          className={styles.myloretitle}
          src={MyLore}
          width={150}
          height={150}
          alt="Name of the game as Logo in 3D"
      />
      </Link>      
        )}
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "unauthenticated" && (
          <Link href="/loginandregister" className={styles.link}>Login / Register
          </Link>
        )}
        {session.status === "authenticated" && (
          <button onClick={()=>signOut()}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;