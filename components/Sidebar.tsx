import { MouseEvent, useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { TiUserAdd } from "react-icons/ti"
import { BsX } from "react-icons/bs"
import { BiHash } from "react-icons/bi"
import { HiOutlinePlusSm } from "react-icons/hi"

import styles from "../styles/Sidebar.module.css"
import Category from "./Category"
import { useDispatch, useSelector } from "react-redux"
import { StoreState } from "../state/reducers"
import { addCategory, addChannel } from "../state/slices/serversSlice"
import ContextMenu, { ContextMenuType } from "./ContextMenu"
import { ContextMenuColours } from "../types/ContextMenuColours"
import Channel from "./Channel"

export default function Sidebar() {

   const dispatch = useDispatch();
   const selection = useSelector((state: StoreState) => state.selection);
   const servers = useSelector((state: StoreState) => state.servers[selection.server]);

   const [showNotice, setShowNotice] = useState(true);

   const sidebarContextMenu: ContextMenuType[] = [
      {
         displayText: "Hide channels with notifications turned off",
         hasLineAfter: true,
      },
      {
         displayText: "Create a category",
         onClick: () => dispatch(addCategory({ serverIndex: selection.server, name: "new category"})),
      },
      {
         displayText: "Create a channel",
         onClick: () => dispatch(addChannel({ serverIndex: selection.server, categoryIndex: -1, name: "new channel", description: "channel description" })),
      },
      {
         displayText: "Invite friends",
         textColourVariant: ContextMenuColours.Invite,
         onClick: () => hideContextMenu(),
      },
   ]

   useEffect(() => {
      if (process.browser) {
         document.addEventListener("mouseup", (e) => {
            e.stopPropagation();
            if (e.button !== 0) return;
            let contextMenu = (document.getElementById("context-menu") as HTMLDivElement);
            if (e.composedPath()[0] !== contextMenu && (e.composedPath()[0] as HTMLButtonElement).parentElement !== contextMenu) {
               contextMenu.style.display = "none";
            }
         });
         document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
               let contextMenu = (document.getElementById("context-menu") as HTMLDivElement);
               contextMenu.style.display = "none";
            }
         });
      }
   }, []);

   const openContextMenu = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      let contextMenu = (document.getElementById("context-menu") as HTMLDivElement);
      contextMenu.style.display = "flex";
      contextMenu.style.top = (contextMenu.offsetHeight + e.pageY + 12 > window.innerHeight ? window.innerHeight - contextMenu.offsetHeight - 12 : e.pageY) + "px";
      contextMenu.style.left = e.pageX.toString() + "px";
   }

   const hideContextMenu = () => {
      (document.getElementById("context-menu") as HTMLDivElement).style.display = "none";
   }

   return (
      <div className={styles.sidebar}>
         <div className={styles["server-settings"]}>
            Server Name
            <MdKeyboardArrowDown className={styles["settings-dropdown-icon"]} />
         </div>
         {showNotice ? 
            // <img src="https://discord.com/assets/5e690f4c63a19a36bff7f6364eaa6ea2.svg"></img>
            // There's a server list! Gather some friends and boost the server. 
            // Check the level and benefits.

            // https://discord.com/assets/7de1e682a4fbf1483ad81f3872e5a9b2.png
            // Want to emphasize the individuality of your server?
            // You can unlock a custom server banner after 7 more boosts (bolded)
            // Boost the server
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
         <div className={styles["channels-container"]} onContextMenu={(e) => openContextMenu(e)}>
            { servers.newChannels.length > 0 ? 
               <div className={styles["new-channels-container"]}>
                  {servers.newChannels.map((channel, index) => (
                     <Channel name={channel.name} categoryIndex={-1} index={index} key={index}/>
                  ))}
               </div>
            : null}
            <div className={styles["categories-container"]}>
               {servers.categories.map((category, index) => (
                  <Category name={category.name} channels={category.channels} index={index} key={index}/>
               ))}
            </div>
            <ContextMenu data={sidebarContextMenu} />          
         </div>
      </div>
   )
}