"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./navbar.module.css";
import { useSession, signOut } from 'next-auth/react';

// Logo (Linke Seite)
import MyLore from '../../assets/my-lore-schriftzug.png';
import Image from 'next/image';

// Fonts
import { titleFont } from '../../app/fonts';
import { usePathname, useRouter } from 'next/navigation';


//--------------------------------------------------------------------//

const Navbar = () => {

  const session = useSession();
  const router = useRouter();
  const path = usePathname();
  let game = false;


    if((path === "/game") || 
    (path === "/inventar") || 
    (path === "/questlog") || 
    (path === "/worldmap")){
      game = true;

  }else{
    game = false;

  }
  
  //--------------------------------------------------------------------------//
  //window.location.path funktioniert nicht mehr bei NextJS,
  //da gibts den neuen usePathname()-Hook
  //--------------------------------------------------------------------------//

  // useEffect(()=>{
  //   setLocation(window.location.path);
  //   console.log(location);
  //   if((location === "/game") || 
  //   (location === "/inventar") || 
  //   (location === "/questlog") || 
  //   (location === "/worldmap")){
  //   setGame(true);
  // }else{
  //   setGame(false);
  // }
  // },[location]);
 
  return (
    <div className={`${styles.container} ${titleFont.className}`}>

{/* -------------------------------------------------------------------------- */}
{/* ------------------WENN NICHT EINGELOGGT ---------------------------------- */}

        {(session.status === "unauthenticated") && (!game) && (
        <div className={styles.links}>
          <Link href="/" className={styles.logo}>
            <Image
              className={styles.myloretitle}
              src={MyLore}
              width={150}
              height={150}
              alt="Name of the game as Logo in 3D"
            />
          </Link>
          <Link href="/gameinfo" className={styles.link}>Spiele-Wiki</Link> 
          <Link href="/gallery" className={styles.link}>Gallerie</Link> 
          <Link href="/loginandregister" className={styles.link}>Login / Register</Link>
      </div>
      )}

{/* -------------------------------------------------------------------- */}
{/* ------------------WENN EINGELOGGT ---------------------------------- */}

      {(session.status === "authenticated") && (!game) &&(
        <div className={styles.links}>
          <Link href="/characteroverview" className={styles.logo}>
            <Image
              className={styles.myloretitle}
              src={MyLore}
              width={150}
              height={150}
              alt="Name of the game as Logo in 3D"
            />
          </Link>
          <Link href="/characteroverview" className={styles.link}>Charakterübersicht</Link>  
          <Link href="/gameinfo" className={styles.link}>Spiele-Wiki</Link> 
          <Link href="/gallery" className={styles.link}>Gallerie</Link> 
          <button onClick={()=>signOut()}>Logout</button>
      </div>
      )}

{/* -------------------------------------------------------------------- */}
{/* ---------------WENN EINGELOGGT && "INGAME"-------------------------- */}


{(session.status === "authenticated") && (game) && (
        <div className={styles.links}>
          <Link href="/characteroverview" className={styles.logo}>
            <Image
              className={styles.myloretitle}
              src={MyLore}
              width={150}
              height={150}
              alt="Name of the game as Logo in 3D"
            />
          </Link>
          <Link href="/inventar" className={styles.link}>Inventar</Link>
          <Link href="/questlog" className={styles.link}>Questlog</Link>  
          <Link href="/worldmap" className={styles.link}>Weltkarte</Link> 
          <button onClick={()=>signOut()}>Logout</button>
      </div>
      )}
    </div>
  );
};

export default Navbar;