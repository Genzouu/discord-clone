import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../state/reducers";
import { addServer } from "../state/slices/serversSlice";
import styles from "../styles/ServerIcon.module.css"

interface ServerIconProps {
   icon: string,
   showPill: boolean,
   onClick?: () => void;
}

export default function ServerIcon(props: ServerIconProps) {
   return (
      <div className={styles["server-icon"]}>
         <button id="icon" className={styles.icon} onClick={props.onClick ?? (() => {})}></button>
         <div className={styles["pill-container"]}>
            {props.showPill ? <div className={styles.pill}></div> : null }
         </div>
      </div>
   )
}