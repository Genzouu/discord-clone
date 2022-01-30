import type { NextPage } from 'next'
import Head from 'next/head'

import ServerBar from '../components/ServerBar'
import SideBar from '../components/Sidebar'
import Header from '../components/Header'
import MembersBar from '../components/MembersBar'
import Posts from '../components/Chat'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <ServerBar />
      <SideBar />     
      <div className={styles["content-container"]}>
         <Header />
         <div className={styles.feed}>
            <Posts />
            <MembersBar />
         </div>
      </div>
    </div>
  )
}

export default Home
