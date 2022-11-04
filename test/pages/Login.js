import styles from './login.module.css'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Formik, Form, Field } from 'formik'
import login from '../static/login.png'

function Login() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")

  const inputChangeHandler = e => {
    const value = e.target.value
    setEmail(e.target.value)
    if (
      !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
        value
      )
    ) {
      setError("Invalid Email")
    } else {
      setError("")
    }
  }

  return(
      <div className={styles.body}>
        <title>Login</title>
        <div className={styles.container}>
        <div className={[styles.formcontainer, styles.logcontainer].join(" ")}>
        <form className={styles.form} action="/api/loginmdb" method="post">
          <br />
          <br />
          <br />
          <h1 className={styles.diffh1}>Login</h1>
          <span className={styles.span}>and start the fun!</span>
          <br />
          <br />
          <input  className={styles.input} type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={inputChangeHandler} />
          <br />
          <input className={styles.input} type="password" name='password' placeholder="Password" />
          <br />
          <button type = "submit" className={styles.button}>Log In</button>
          <span className={styles.p}>Don't have an account?<Link href="/Signup">Sign up</Link></span>
        </form>

        </div>
          <div className={styles.overlaycontainer}>
            <div className={styles.overlay}>
              <div className={[styles.overlaypanel, styles.overlayright].join(" ")}>
                <h1 className={styles.h1}> Login Form</h1>
                <p style={{ height: '150px', width: '150px', marginLeft: '19%' }}><Image src={login} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
);

}


export default Login;
