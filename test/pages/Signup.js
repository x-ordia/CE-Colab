import styles from './login.module.css'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Formik, Form, input } from 'formik'
import signup from '../static/write.png'


function Signup() {
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
          <title>Signup</title>
          <div className={styles.container}>
            <div className={[styles.formcontainer, styles.logcontainer].join(" ")}>
              <form className={styles.form} action="/api/signupmdb" method="post">
                <br />
                <br />
                <br />
                <h1 className={styles.diffh1}>Signup</h1>
                <span className={styles.span}>to begin the experience</span>
                <br />
                <br />
                <input className={styles.input} type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={inputChangeHandler}  placeholder="Email" />
                <br />
                <input className={styles.input} type="password" name='password' placeholder="Password" />
                <br />
                <input type='submit' className={styles.button} value='register'></input>
                <span className={styles.p}>Already have an account?<Link href="/Login">Login</Link></span>
              </form>
            </div>
            <div className={styles.overlaycontainer}>
              <div className={styles.overlay}>
                <div className={[styles.overlaypanel, styles.overlayright].join(" ")}>
                  <h1 className={styles.h1}>SignUp Form</h1>
                  <p style={{ height: '150px', width: '150px', marginLeft: '19%' }}><Image src={signup} /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
);

}

export default Signup;
