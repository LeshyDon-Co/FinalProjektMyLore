import React from 'react'
import styles from "./register.module.css";

function Register() {
  return (
    <div>
        <h2>Registrierung</h2>
        <form>
          <div>
            <label>Username</label>
            <input
              // value={username}
              type='text'
              required
              placeholder='Username'
            />
          </div>
          <div>
            <label>Email-Adresse</label>
            <input
              // value={email}
              type='email'
              required
              placeholder='Email'
            />
          </div>
          <div>
            <label>Passwort</label>
            <input 
              // value={password}
              type='password'
              required
              placeholder='Password'
            />
          </div>
          <button>Registrieren</button>
        </form>
    </div>
  )
}

export default Register;