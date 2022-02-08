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

export default function Sidebar() {

   const dispatch = useDispatch();
   const selection = useSelector((state: StoreState) => state.selection);
   const categories = useSelector((state: StoreState) => state.servers[selection.server].categories);

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
         onClick: () => dispatch(addChannel({ serverIndex: selection.server, categoryIndex: selection.category, name: "new channel" })),
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
      // contextMenu.style.top = (e.pageY - contextMenu.offsetHeight/2).toString() + "px";
      contextMenu.style.top = e.pageY.toString() + "px";
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
            // <img src="/assets/5e690f4c63a19a36bff7f6364eaa6ea2.svg"></img>
            // There's a server list! Gather some friends and boost the server. 
            // Check the level and benefits.
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
            {categories.map((section, index) => (
               <Category name={section.name} channels={section.channels} index={index} key={index}/>
            ))}
            <ContextMenu data={sidebarContextMenu} />          
         </div>
      </div>
   )
}