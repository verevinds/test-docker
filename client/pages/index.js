import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'

export default function Home() {
  useEffect(async () => {
    const res = await axios.get('http://localhost:8081/posts');

    console.log(res.data)
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
sdsdfffv
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
