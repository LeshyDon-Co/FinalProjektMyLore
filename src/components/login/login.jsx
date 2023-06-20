"use client";

import React, { useState } from 'react';
import styles from "./login.module.css";
//--------------------------------------------------------------------//

const Login = () => {

  const [emaillogin, setEmaillogin] = useState("");
  const [passwordlogin, setPasswordlogin] = useState("");
  const [error, setError] = useState(false);

//--------------------------------------------------------------------//
const loginUser = async (e) => {
  e.preventDefault();


  //Dateneingabe speichern
  //An Datenbank schicken
  //Schauen, ob diese Emailadresse bereits vorhanden ist
  //wenn vorhanden -> Passwort abfragen
  //wenn erfolgreich -> Variable isLoggedIn auf true setzen
  //wenn nicht vorhanden oder PW falsch, dann Rückmeldung an User

    try {
      const res = await fetch("/api/auth/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emaillogin,
          passwordlogin,
        }),
      });

    if(res.status === 201){
      console.log("User eingeloggt!");
    };    
  } catch (error) {
    setError(true);
  }

  setEmaillogin("");
  setPasswordlogin("");
};

//--------------------------------------------------------------------//

  return (
    <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email</label>
            <input
              value={emaillogin}
              type='text'
              required
              placeholder='Email'
              onChange={(e) => {setEmaillogin(e.target.value)}}
            />
          </div>
          <div>
            <label>Passwort</label>
            <input
              value={passwordlogin}
              type='password'
              required
              placeholder='Passwort'
              onChange={(e) => {setPasswordlogin(e.target.value)}}
            />
          </div>
          <button onClick={loginUser}>Login</button>
        </form>
        
    </div>
  )
}

export default Login;

//TODO:
//Login möglich mit Email UND USERNAME