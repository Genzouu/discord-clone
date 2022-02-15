import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../state/reducers';
import { setSelectedServer } from '../state/slices/selectionSlice';
import { addServer } from '../state/slices/serversSlice';

import styles from '../styles/ServerBar.module.css'
import ServerIcon from './ServerIcon';

export default function ServerBar() {

   const dispatch = useDispatch();
   const servers = useSelector((state: Store) => state.servers);

   const [prevIndex, setPrevIndex] = useState<number>();

   return (
      <div className={styles["server-bar"]}>
         <ServerIcon icon={""} showPill={false} />
         <hr className={`${styles.divider} ${styles.center}`} />
         <div id="server-container">
            {servers.map((server, index) => (
               <ServerIcon icon={""} showPill={true} index={index} onClick={() => dispatch(setSelectedServer(index))} key={index} />
               // <input className={styles.server} type="image" src="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg"></input>//         
            ))}
         </div>
         <ServerIcon showPill={false} icon={""} onClick={() => dispatch(addServer("new server"))} />
         <ServerIcon showPill={false} icon={""} />
         <hr className={`${styles.divider} ${styles.center}`} />
         <ServerIcon showPill={false} icon={""} />
      </div>
   )
}