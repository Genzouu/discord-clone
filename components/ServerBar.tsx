import { useState } from 'react'

import styles from '../styles/ServerBar.module.css'
import Data from '../types/Data'
import ServerIcon from './ServerIcon';

export default function ServerBar() {

   const serversInitState: Data['servers'] = [];
   const [servers, setServers] = useState(serversInitState);

   return (
      <div className={styles["server-bar"]}>
            <ServerIcon icon={""} showPill={false} />
            <hr className={`${styles.divider} ${styles.center}`} />
            {[...new Array(16)].map((server, index) => (
               <ServerIcon icon={""} showPill={true} key={index}  />
               // <input className={styles.server} type="image" src="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg"></input>//         
            ))}
            <ServerIcon showPill={false} icon={""} />
            <ServerIcon showPill={false} icon={""} />
            <hr className={`${styles.divider} ${styles.center}`} />
            <ServerIcon showPill={false} icon={""} />
      </div>
   )
}