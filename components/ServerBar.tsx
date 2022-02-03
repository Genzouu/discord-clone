import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../state/reducers';
import { setSelectedServer } from '../state/slices/selectionSlice';
import { addServer } from '../state/slices/serversSlice';

import styles from '../styles/ServerBar.module.css'
import ServerIcon from './ServerIcon';

export default function ServerBar() {

   const dispatch = useDispatch();
   const servers = useSelector((state: StoreState) => state.servers);

   return (
      <div className={styles["server-bar"]}>
            <ServerIcon icon={""} showPill={false} />
            <hr className={`${styles.divider} ${styles.center}`} />
            {servers.map((server, index) => (
               <ServerIcon icon={""} showPill={true} key={index} onClick={() => dispatch(setSelectedServer(index))} />
               // <input className={styles.server} type="image" src="http://icon-library.com/images/discord-transparent-server-icon/discord-transparent-server-icon-17.jpg"></input>//         
            ))}
            <ServerIcon showPill={false} icon={""} />
            <ServerIcon showPill={false} icon={""} onClick={() => dispatch(addServer("new server"))} />
            <hr className={`${styles.divider} ${styles.center}`} />
            <ServerIcon showPill={false} icon={""} />
      </div>
   )
}