import type { NextPage } from 'next'
import Head from 'next/head'

import ServerBar from '../components/ServerBar'
import SideBar from '../components/Sidebar'
import Header from '../components/Header'
import MembersBar from '../components/MembersBar'
import Chat from '../components/Chat'
import styles from '../styles/Home.module.css'
import { Provider } from 'react-redux'
import { store } from '../state/store'
import { useEffect } from 'react'

const Home: NextPage = () => {

   useEffect(() =>{
      if (process.browser) {
         document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
         })
      }
   }, []);

  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
         <ServerBar />
         <SideBar />     
         <div className={styles["content-container"]}>
            <Header />
            <div className={styles.feed}>
               <Chat />
               <MembersBar />
            </div>
         </div>
      </Provider>
    </div>
  )
}

export default Home
