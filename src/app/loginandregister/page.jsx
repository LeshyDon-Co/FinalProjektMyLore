"use client";
<<<<<<< HEAD
import Register from '@/components/register/register';
import Login from '@/components/login/login';
import React, { useEffect, useState } from 'react';
=======
import Register from "@/components/register/register";
import Login from "@/components/login/login";
import React from "react";

>>>>>>> develop
import Link from "next/link";
import styles from "./page.module.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";


<<<<<<< HEAD
//--------------------------------------------------------//

const LoginandRegister = () => {
=======
// const LoginandRegister = async () => {
function LoginandRegister() {
>>>>>>> develop

  const router = useRouter();
  const session = useSession();

<<<<<<< HEAD
    useEffect(() => {
    if(session.status === "authenticated"){
      //Einkommentieren, wenn Overview fertig
      // router.push("/characteroverview")
    }
  }, [session])

//--------------------------------------------------------//
=======


  if(session.status === "authenticated"){
    router.push("/characteroverview");
  }else{
>>>>>>> develop

  return (
    <div className={styles.body}>
      <div className={styles.loginregistercontainer}>
        <div className={styles.registercontainer}>
          <Register />
        </div>
        <div className={styles.p}>
          <p>
            Hier kommen die Statusmeldungen über Registrierung und Validierung
            rein.
          </p>
<<<<<<< HEAD
=======
          {/* {showRegistrysuccessfull && (
            <p className="RegisterMailInfo">Mail ist unterwegs!</p>
          )}
          {myRegisterError && (
            <p className="myRegisterError">{myRegisterError}</p> 
          )}*/}
>>>>>>> develop
        </div>
        <div className={styles.logincontainer}>
          <Login />
        </div>
      </div>
    </div>
  );
};


export default LoginandRegister;
