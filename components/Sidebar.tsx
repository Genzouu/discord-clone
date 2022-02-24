import { MouseEvent, useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

import styles from "../styles/Sidebar.module.css";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { addCategory, addChannel } from "../state/slices/serversSlice";
import ContextMenu, { ContextMenuType } from "./ContextMenu";
import { ContextMenuColours } from "../types/ContextMenuColours";
import Channel from "./Channel";
import UserPanel from "./UserPanel";
import Notice from "./Notice";
import BoostNotice from "../public/boost-notice.svg";

export default function Sidebar() {
   const dispatch = useDispatch();
   const selection = useSelector((state: StateType) => state.selection);
   const server = useSelector((state: StateType) => state.servers[selection.server]);

   const [showNotice, setShowNotice] = useState(true);

   const sidebarContextMenu: ContextMenuType[] = [
      {
         displayText: "Hide channels with notifications turned off",
         hasLineAfter: true,
      },
      {
         displayText: "Create a category",
         onClick: () => dispatch(addCategory({ serverIndex: selection.server, name: "new category" })),
      },
      {
         displayText: "Create a channel",
         onClick: () =>
            dispatch(
               addChannel({
                  serverIndex: selection.server,
                  categoryIndex: -1,
                  name: "new channel",
                  description: "channel description",
               })
            ),
      },
      {
         displayText: "Invite friends",
         textColourVariant: ContextMenuColours.Invite,
         onClick: () => hideContextMenu(),
      },
   ];

   useEffect(() => {
      if (process.browser) {
         document.addEventListener("mouseup", (e) => {
            e.stopPropagation();
            if (e.button !== 0) return;
            let contextMenu = document.getElementById("context-menu") as HTMLDivElement;
            if (
               e.composedPath()[0] !== contextMenu &&
               (e.composedPath()[0] as HTMLButtonElement).parentElement !== contextMenu
            ) {
               contextMenu.style.display = "none";
            }
         });
         document.addEventListener("keyup", (e) => {
            if (e.key === "Escape") {
               let contextMenu = document.getElementById("context-menu") as HTMLDivElement;
               contextMenu.style.display = "none";
            }
         });
      }
   }, []);

   const openContextMenu = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      let contextMenu = document.getElementById("context-menu") as HTMLDivElement;
      contextMenu.style.display = "flex";
      contextMenu.style.top =
         (contextMenu.offsetHeight + e.pageY + 12 > window.innerHeight
            ? window.innerHeight - contextMenu.offsetHeight - 12
            : e.pageY) + "px";
      contextMenu.style.left = e.pageX.toString() + "px";
   };

   const hideContextMenu = () => {
      (document.getElementById("context-menu") as HTMLDivElement).style.display = "none";
   };

   return (
      <div className={styles.sidebar}>
         <div className={styles["server-settings"]}>
            {server.name}
            <MdKeyboardArrowDown className={styles["settings-dropdown-icon"]} />
         </div>
         {showNotice ? (
            <Notice
               onClose={() => setShowNotice(false)}
               image={BoostNotice.src}
               text={["There's a server list!", "Gather some friends and boost the server"]}
               buttonText={"Check the level and benefits"}
            />
         ) : null}
         <div className={styles["channels-container"]} onContextMenu={(e) => openContextMenu(e)}>
            {server.newChannels.length > 0 ? (
               <div className={styles["new-channels-container"]}>
                  {server.newChannels.map((channel, index) => (
                     <Channel name={channel.name} categoryIndex={-1} index={index} key={index} />
                  ))}
               </div>
            ) : null}
            <div id="categories-container">
               {server.categories.map((category, index) => (
                  <Category name={category.name} channels={category.channels} index={index} key={index} />
               ))}
            </div>
            <ContextMenu data={sidebarContextMenu} />
         </div>
         <UserPanel />
      </div>
   );
}
