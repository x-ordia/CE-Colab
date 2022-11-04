import styles from '../styles/error.module.css'
import Link from 'next/link';
import Image from 'next/image';
import err_img from '../static/error.png'
import gear from '../static/gear.gif'
import Script from 'next/script'

function Error(props) {
  return(
      <div className={styles.body}>
        <title>Error</title>
        <div className={styles.container}>
        <div className={[styles.formcontainer, styles.logcontainer].join(" ")}>
        <form className={styles.form}>
          <Image
            alt="error image"
            src={err_img}
            width={100}
            height={100}
            style={{
              maxWidth: '100%'
            }}
          />
          <br />
          <br />
          <br />
          <h1 className={styles.diffh1}>ERROR</h1>
          <span className={styles.span}></span>
          <hr />
          <p>An error has occured</p>
        </form>

        </div>
          <div className={styles.overlaycontainer}>
            <div className={styles.overlay}>
              <div className={[styles.overlaypanel, styles.overlayright].join(" ")}>
                <p style={{ marginLeft: '25%', marginTop: '-7%' }}><Image src={gear} /></p>
                <p className={styles.h1}>We are sorry for the inconvenience</p>
                <p className={styles.h1}>Our team is working on it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Error;
