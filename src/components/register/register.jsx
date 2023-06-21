
"use client";

import React, { useState } from 'react';
import styles from "./register.module.css";

//--------------------------------------------------------------------//
const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

//--------------------------------------------------------------------//
  const registerUser = async (e) => {
    e.preventDefault();
    

    //Senden der eingegebenen Informationen an den api/register-Endpunkt.
    //Dieser sendet eine Antwort, die wie in "res" speichern und dann abfragen.
    //Wenn der Status dieser Antwort 201 ist, bedeutet das, die Registrierung war erfolgreich
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if(res.status === 201){
        console.log("User registriert!!! Bitte einoggen um fortzufahren.");
      }
    } catch (error) {
        setError(true);
    }

    setUsername("");
    setEmail("");
    setPassword("");
  };

//--------------------------------------------------------------------//
  return (
    <div className={styles.body}>
      <h2 className={styles.loginheading}>Registrierung</h2>
      <form>
        <div className={styles.formgroup}>
          <label className={styles.loginlabel}>Username</label>
          <input
            type="username"
            id="username"
            className={styles.logininput}
            required
            placeholder="Username"
            value={username}
            onChange={(e) => {setUsername(e.target.value)}}
          />
        </div>
        <div className={styles.formgroup}>
          <label className={styles.loginlabel}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.logininput}
            required
            placeholder="Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password" className={styles.loginlabel}>
            Passwort
          </label>
          <input
            id="password"
            className={styles.logininput}
            required
            placeholder="Passwort"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <button type="submit" onClick={registerUser} className={styles.loginbutton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
