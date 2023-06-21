"use client";
import Register from '@/components/register/register';
import Login from '@/components/login/login';
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


const LoginandRegister = () => {

  const session = useSession();
  const router = useRouter();

  console.log(session);
  console.log("Hallo ich bin eingeloggt oder?");
  if(session.status === 'authenticated'){
    router.push("/characteroverview");
  }else{
    router.push("/loginandregister")
  };

  return (
    <div className={styles.body}>
      {/* <h2>Registrierung und Login</h2> */}
      <div className={styles.loginregistercontainer}>
        <div className={styles.registercontainer}>
          <Register />
        </div>
        <div className={styles.p}>
          <p>
            Hier kommen die Statusmeldungen über Registrierung und Validierung
            rein.
          </p>
          {/* {showRegistrysuccessfull && (
            <p className="RegisterMailInfo">Mail ist unterwegs!</p>
          )}
          {myRegisterError && (
            <p className="myRegisterError">{myRegisterError}</p>
          )} */}
        </div>
        <div className={styles.logincontainer}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginandRegister;
