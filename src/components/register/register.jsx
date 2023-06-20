import React from "react";
import styles from "./page.module.css";

function Register() {
  return (
    <div>
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
