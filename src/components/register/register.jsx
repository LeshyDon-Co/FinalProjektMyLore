import React from "react";
import styles from "./register.module.css";

function Register() {
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
            required="true"
            placeholder="Username"
          />
        </div>
        <div className={styles.formgroup}>
          <label className={styles.loginlabel}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.logininput}
            required="true"
            placeholder="Email"
          />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password" className={styles.loginlabel}>
            Passwort
          </label>
          <input
            type="password"
            id="password"
            className={styles.logininput}
            required="true"
            placeholder="Passwort"
          />
        </div>
        <button type="submit" className={styles.loginbutton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
