import type { NextPage } from 'next'
import Head from 'next/head'

import ServerBar from '../components/ServerBar'
import SideBar from '../components/Sidebar'
import Header from '../components/Header'
import MembersBar from '../components/MembersBar'
import Posts from '../components/Chat'
import styles from '../styles/Home.module.css'
import { Provider } from 'react-redux'
import { store } from '../state/store'

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
         <ServerBar />
         <SideBar />     
         <div className={styles["content-container"]}>
            <Header />
            <div className={styles.feed}>
               <Posts />
               <MembersBar />
            </div>
         </div>
      </Provider>
    </div>
  )
}

export default Home
