import React from "react";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles.body}>
      <h2 className={styles.loginheading}>Login</h2>
      <form>
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
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
