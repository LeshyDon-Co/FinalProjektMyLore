"use client";

import React, { useState } from 'react';
import styles from "./login.module.css";
import {signIn} from "next-auth/react";

//--------------------------------------------------------------------//

const Login = () => {

  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [error, setError] = useState(false);


//--------------------------------------------------------------------//
const loginUser = async (e) => {
  e.preventDefault();

  signIn("credentials", {redirect: false, emaillogin, passwordlogin})

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
            id="emaillogin"
            className={styles.logininput}
            required={true}
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
            id="passwordlogin"
            className={styles.logininput}
            required={true}
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
