import styles from "../styles/ServerIcon.module.css"

interface ServerIconProps {
   icon: string,
   showPill: boolean,
}

export default function ServerIcon({ icon, showPill }: ServerIconProps) {


   return (
      <div className={styles["server-icon"]}>         
         <button id="icon" className={styles.icon}></button>
         <div className={styles["pill-container"]}>
            {showPill ? <div className={styles.pill}></div> : null }
         </div>
      </div>
   )
}