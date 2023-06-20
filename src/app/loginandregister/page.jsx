import Register from '@/components/register/register';
import Login from '@/components/login/login';
import React from 'react';
import Link from "next/link";
import styles from "./page.module.css";

function LoginandRegister() {
  return (
    <div>
      <h2>Registrierung und Login</h2>
      <div className={styles.loginregistercontainer}>
        <div className={styles.registercontainer}>
          <Register />
        </div>
        <div className={styles.logincontainer}>
          <Login />
        </div>
      </div>
      <Link href="/">zurück zur Startseite</Link>
    </div>
  )
}

export default LoginandRegister;