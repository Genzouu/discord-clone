import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TiUserAdd } from "react-icons/ti"
import { BsX } from "react-icons/bs"
import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"

import styles from "../styles/Sidebar.module.css"
import ChannelSection from "./ChannelSection"

export default function Sidebar() {

   const [showNotice, setShowNotice] = useState(true);

   const channelSectionsInitState: { name: string, channels: string[] }[] = [ 
      { name: "channel", channels: ["test 1", "test 2"] }, 
      { name: "channel", channels: ["test 1", "test 2"] }, 
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
      { name: "channel", channels: ["test 1", "test 2"] },
   ];
   const [channelSections, setChannelSections] = useState(channelSectionsInitState);

   return (
      <div className={styles.sidebar}>
         <div className={styles["server-settings"]}>
            Server Name
            <MdKeyboardArrowDown className={styles["settings-dropdown-icon"]} />
         </div>
         {showNotice ? 
            <div className={styles["notice-container"]}>
               <BsX className={styles["close-notice-icon"]} onClick={() => setShowNotice(false)}/>
               <div className={styles["invite-friends-notice"]}>              
                  <TiUserAdd className={styles["invite-friends-notice-icon"]}/>
                  <p className={styles["invite-friends-notice-text"]}>
                     Let's set on an adventure
                     <br/>
                     Invite some friends!
                  </p>
                  <button className={styles["invite-friends-notice-button"]}>Invite Friends</button>
               </div>
            </div>
         : null }
         <div className={styles["channel-sections-container"]}>
            {channelSections.map((section, index) => (
               <ChannelSection name={section.name} channels={section.channels} index={index} key={index}/>
            ))}
         </div>
      </div>
   )
}