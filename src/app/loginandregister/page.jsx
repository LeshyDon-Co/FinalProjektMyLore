"use client";

import Register from "@/components/register/register";
import Login from "@/components/login/login";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "./page.module.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

//--------------------------------------------------------//

// const LoginandRegister = async () => {
function LoginandRegister() {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.status === "authenticated") {
      //Einkommentieren, wenn Overview fertig
      router.push("/characteroverview");
    }
  }, [session]);

  //--------------------------------------------------------//

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
        </div>
        <div className={styles.logincontainer}>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginandRegister;
