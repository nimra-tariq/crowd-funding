import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Crowd Funding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
    <Navbar></Navbar>
    <Hero></Hero>
   </>
  )
}