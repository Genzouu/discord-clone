import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Store } from "../state/reducers";
import styles from "../styles/ServerIcon.module.css"

interface ServerIconProps {
   icon: string,
   showPill: boolean,
   onClick?: () => void;
   index?: number
}

export default function ServerIcon(props: ServerIconProps) {

   const selection = useSelector((state: Store) => state.selection);

   return (
      <div className={`${styles["server-icon"]} ${props.index === selection.server ? styles["selected"] : ""}`}>
         <button  id="icon" className={styles.icon} onClick={props.onClick}></button>
         {props.showPill ?
         <div className={styles["pill-container"]}>
             <div className={styles.pill}></div> 
         </div>
         : null }
      </div>
   )
}