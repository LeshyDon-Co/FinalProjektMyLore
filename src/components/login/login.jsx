import React from 'react';
import styles from "./login.module.css";

function Login() {
  return (
    <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email</label>
            <input
              type='text'
              required
              placeholder='Email'
            />
          </div>
          <div>
            <label>Passwort</label>
            <input
              type='password'
              required
              placeholder='Passwort'
            />
          </div>
          <button>Login</button>
        </form>
        
    </div>
  )
}

export default Login;

//TODO:
//Login möglich mit Email UND USERNAME