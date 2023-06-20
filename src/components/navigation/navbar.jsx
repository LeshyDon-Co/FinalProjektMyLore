"use client";
import Link from 'next/link';
import React from 'react';
import styles from "./navbar.module.css";

// Logo (Linke Seite)
import MyLore from '../../assets/my-lore-schriftzug.png';
import Image from 'next/image';

// Fonts
import { titleFont } from '../../app/fonts'

const links = [
  {
    id: 1,
    title: "Gameinfo",
    url: "/gameinfo",
  },
  {
    id: 2,
    title: "Gallery",
    url: "/gallery",
  },
  {
    id: 3,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Login / Register",
    url: "/loginandregister",
  },
];

const Navbar = () => {
  return (
    <div className={`${styles.container} ${titleFont.className}`}>
      <Link href="/" className={styles.logo}>
      <Image
        className={styles.myloretitle}
        src={MyLore}
        width={150}
        height={150}
        alt="Name of the game as Logo in 3D"
      />
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;