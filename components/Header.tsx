import styles from '../styles/Header.module.css'
import { BsMegaphoneFill } from "react-icons/bs"
import { BiHash } from "react-icons/bi"
import { SiGooglemessages } from "react-icons/Si"
import { FaBell } from "react-icons/fa"
import { BsPinAngleFill } from "react-icons/bs"
import { ImUsers } from "react-icons/im"
import { MdInbox } from "react-icons/md"
import { IoMdHelpCircle } from "react-icons/io"
import { BiSearch } from "react-icons/bi"
// ImUsers
// IoHelpCircle
// BsBellSlashFill
// FaBellSlash

export default function Header() {
   return (
      <div className={styles.header}>
            <div className={styles["channels-container"]}>
               {/* <BsMegaphoneFill className={styles["channel-icon"]} /> */}
               <BiHash className={styles["channel-icon"]} />
               <h1>channel-name</h1>
               <button className={styles["follow-button"]}>Follow</button>
               <div className={styles.vl}></div>
               <p className={styles.description}>This is the channel description</p>
            </div>
            <div className={styles["toolbar-container"]}>         
               <SiGooglemessages className={styles["toolbar-element"]}/>
               <FaBell className={styles["toolbar-element"]}/>
               <BsPinAngleFill className={styles["toolbar-element"]}/>
               <ImUsers className={styles["toolbar-element"]}/>
               <div className={styles["toolbar-searchbar-container"]}>
                  <input className={styles["toolbar-searchbar"]} placeholder='Search'></input>
                  <BiSearch className={styles["searchbar-search-icon"]}/>
               </div>
               <MdInbox className={styles["toolbar-element"]}/>
               <IoMdHelpCircle className={styles["toolbar-element"]}/>
            </div>
      </div>
   )
}