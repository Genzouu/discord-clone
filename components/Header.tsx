import styles from '../styles/Header.module.css'
import { BsMegaphoneFill } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { SiGooglemessages } from "react-icons/Si"
import { FaBell } from "react-icons/fa"
import { BsPinAngleFill } from "react-icons/bs"
import { ImUsers } from "react-icons/im"
import { MdInbox } from "react-icons/md"
import { IoMdHelpCircle } from "react-icons/io"
// ImUsers
// IoHelpCircle


export default function Header() {
   return (
      <div className={styles.wrapper}>
         <div className={styles.test}>
         <div className={styles["channel-container-shadow"]}>
            <div className={styles["channel-container"]}>
               {/* <BsMegaphoneFill className={`${styles["channel-icon"]} ${styles["center-vertically"]}`} /> */}
               <FaHashtag className={styles["channel-icon"]} />
               <h1>channel-name</h1>
               <button className={styles["follow-button"]}>Follow</button>
            </div>
         </div>
         <div className={styles["toolbar-container"]}>          
            <SiGooglemessages className={styles["channel-icon"]}/>
            <FaBell className={styles["channel-icon"]}/>
            <BsPinAngleFill className={styles["channel-icon"]}/>
            <ImUsers className={styles["channel-icon"]}/>
            <input></input>
            <MdInbox className={styles["channel-icon"]}/>
            <IoMdHelpCircle className={styles["channel-icon"]}/>           
         </div>
         </div>
      </div>
   )
}