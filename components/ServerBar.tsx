import { useState } from 'react'

import styles from '../styles/ServerBar.module.css'
import Data from '../types/Data'

export default function ServerBar() {

   const serversInitState: Data['servers'] = [];
   const [servers, setServers] = useState(serversInitState);

   return (
      <div className={styles.wrapper}>
            <button className={`${styles.icon} ${styles.center}`}></button>
            <hr className={`${styles.divider} ${styles.center}`} />
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((server, index) => (
               <button className={`${styles.icon} ${styles.center}`} key={index}></button>
               // <input className={styles.server} type="image" src="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg">
                  
               // </input>
            ))}
            <button className={`${styles.icon} ${styles.center}`}></button>
            <button className={`${styles.icon} ${styles.center}`}></button>
            <hr className={`${styles.divider} ${styles.center}`} />
            <button className={`${styles.icon} ${styles.center}`}></button>
      </div>
   )
}