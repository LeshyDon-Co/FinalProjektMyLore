import Register from '@/components/register/register';
import Login from '@/components/login/login';
import React from 'react';
import styles from "./page.module.css";

function LoginandRegister() {
  return (
    <div>
        <h1>Login und Register</h1>
        <Register/>
        <Login />
    </div>
  )
}

export default LoginandRegister;