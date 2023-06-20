"use client";
import Link from 'next/link';
import React, { useState } from 'react'
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
        console.log("User registriert!!!");
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
    <div>
        <h2>Registrierung</h2>
        <form>
          <div>
            <label>Username</label>
            <input
              value={username}
              type='text'
              required
              placeholder='Username'
              onChange={(e) => {setUsername(e.target.value)}}
            />
          </div>
          <div>
            <label>Email-Adresse</label>
            <input
              value={email}
              type='email'
              required
              placeholder='Email'
              onChange={(e) => {setEmail(e.target.value)}}
            />
          </div>
          <div>
            <label>Passwort</label>
            <input 
              value={password}
              type='password'
              required
              placeholder='Password'
              onChange={(e) => {setPassword(e.target.value)}}
            />
          </div>
          <button onClick={registerUser}>Registrieren</button>
        </form>
        {error && "Etwas ist schief gelaufen!"};
    </div>
  )
}

export default Register;