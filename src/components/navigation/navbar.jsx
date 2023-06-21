"use client";
import Link from 'next/link';
import React from 'react';
import styles from "./navbar.module.css";

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
  {
    id: 5,
    title: "Charaktererstellung",
    url: "/charactercreation",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        My Lore
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