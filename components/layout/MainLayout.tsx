
import { FC } from 'react'

import Head from 'next/head'

import { Navbar } from '../navbar/Navbar'
import styles from './MainLayout.module.css'

type indexProps = {
  children: React.ReactNode
}

export const MainLayout:FC<indexProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
       {children}
      </main>
    </>
  )
}
