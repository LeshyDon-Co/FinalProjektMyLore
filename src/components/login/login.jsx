"use client";

import React, { useState } from 'react';
import styles from "./login.module.css";
import {signIn} from "next-auth/react";
import { useRouter } from 'next/navigation';

//--------------------------------------------------------------------//

const Login = () => {

  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

//--------------------------------------------------------------------//
const loginUser = async (e) => {
  e.preventDefault();


  signIn("credentials", {redirect: false, emaillogin, passwordlogin});
    

  // //Dateneingabe speichern
  // //An Datenbank schicken
  // //Schauen, ob diese Emailadresse bereits vorhanden ist
  // //wenn vorhanden -> Passwort abfragen
  // //wenn erfolgreich -> Variable isLoggedIn auf true setzen
  // //wenn nicht vorhanden oder PW falsch, dann Rückmeldung an User

  setEmaillogin("");
  setPasswordlogin("");
};

//--------------------------------------------------------------------//


  return (
    <div className={styles.body}>
      <h2 className={styles.loginheading}>Login</h2>
      <form>
        <div className={styles.formgroup}>
          <label className={styles.loginlabel}>Email</label>
          <input
            value={emaillogin}
            type="email"
            id="email"
            className={styles.logininput}
            required="true"
            placeholder="Email"
            onChange={(e) => {setEmaillogin(e.target.value)}}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password" className={styles.loginlabel}>
            Passwort
          </label>
          <input
            type="password"
            value={passwordlogin}
            id="password"
            className={styles.logininput}
            required="true"
            placeholder="Passwort"
            onChange={(e) => {setPasswordlogin(e.target.value)}}
          />
        </div>
        <button type="submit" onClick={loginUser} className={styles.loginbutton}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
