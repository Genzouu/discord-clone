import styles from '../styles/Header.module.css'
import { BsMegaphoneFill } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"


export default function Header() {
   return (
      <div className={styles.wrapper}>
         <div className={styles["content-container"]}>
            {/* <BsMegaphoneFill className={`${styles["channel-icon"]} ${styles["center-vertically"]}`} /> */}
            <FaHashtag className={`${styles["channel-icon"]} ${styles["center-vertically"]}`} />
            <h1 className={styles["center-vertically"]}>channel-name</h1>
            <button className={`${styles["follow-button"]} ${styles["center-vertically"]}`}>Follow</button>
         </div>
      </div>
   )
}