import Link from 'next/link'
import styles from '../styles.module.css'


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Path: /401</h1>
        <hr className={styles.hr} />
        <p>
          PAGINA 401

        </p>

        <Link href="/about">
          <a> &larr; Back About</a>
        </Link>
      </div>
    </div>
  )
}
