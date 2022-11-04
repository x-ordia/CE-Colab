import styles from '../styles/Home.module.scss'

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div>
        Vivekanand Educational Society's Institute of Technology
        <p className={styles.footer__left}>
          <a href="https://github.com/Samiksha1603/collaborative_shopping">Github</a>
        </p>
      </div>
    </footer>
  )
}
