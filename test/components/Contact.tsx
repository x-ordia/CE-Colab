import Link from "next/link";
import styles from '../styles/Home.module.scss'

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact__title}>Any questions? <span className={styles.colored}>Contact us.</span></h2>
      <p className={styles.contact__paragraph}>We're looking forward to hearing from you. Feel free to contact us if you have any questions!</p>
      <a href="#">
        <button>Contact Us</button>
      </a>
    </div>
  )
}
