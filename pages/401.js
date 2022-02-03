import Link from 'next/link'
import styles from '../styles.module.css'


export default function About({ data }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Path: /401</h1>
        <hr className={styles.hr} />
        <p>
          PAGINA 401

        </p>
        <h1>hour: {data.hour}</h1>

        <Link href="/about">
          <a> &larr; Back About</a>
        </Link>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let d = new Date();
  let horaFormatada = d.getHours().toString().padStart(2, '0') + ':' +
    d.getMinutes().toString().padStart(2, '0');
  const data = {
    hour: horaFormatada
  }
  return { props: { data } }
}