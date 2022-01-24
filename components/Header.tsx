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
            <div className={styles["channels-container"]}>
               {/* <BsMegaphoneFill className={`${styles["channel-icon"]} ${styles["center-vertically"]}`} /> */}
               <FaHashtag className={styles["channel-icon"]} />
               <h1>channel-name</h1>
               <button className={styles["follow-button"]}>Follow</button>
            </div>
            <div className={styles["toolbar-container"]}>         
               <SiGooglemessages className={styles["toolbar-element"]}/>
               <FaBell className={styles["toolbar-element"]}/>
               <BsPinAngleFill className={styles["toolbar-element"]}/>
               <ImUsers className={styles["toolbar-element"]}/>
               <input className={`${styles["toolbar-searchbar"]}`}></input>
               <MdInbox className={styles["toolbar-element"]}/>
               <IoMdHelpCircle className={styles["toolbar-element"]}/>           
            </div>
      </div>
   )
}