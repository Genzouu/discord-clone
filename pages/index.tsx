import type { NextPage } from "next";

import ServerBar from "../components/ServerBar";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import MembersBar from "../components/MembersBar";
import Chat from "../components/Chat";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import NoChannelsImage from "../public/channel-dne.svg";
import { StateType } from "../state/reducers";
import Tooltip, { TooltipContext, TooltipProps } from "../components/Tooltip";
import ContextMenu, { ContextMenuContext, ContextMenuProps } from "../components/ContextMenu";

const Home: NextPage = () => {
   const serverIndex = useSelector((state: StateType) => state.selection.server);
   const server = useSelector((state: StateType) => state.servers[serverIndex]);

   const [tooltip, setTooltip] = useState<TooltipProps>({
      text: "",
   });
   const [contextMenu, setContextMenu] = useState<ContextMenuProps>({
      elements: [],
   });

   useEffect(() => {
      if (process.browser) {
         document.addEventListener("contextmenu", (e) => {
            if (!(document.activeElement instanceof HTMLAnchorElement)) {
               e.preventDefault();
            }
         });
      }
   }, []);

   return (
      <div className={styles.wrapper}>
         <div className={styles["layer-container"]}>
            <Tooltip text={tooltip.text} direction={tooltip.direction} caller={tooltip.caller} />
            <ContextMenu elements={contextMenu.elements} event={contextMenu.event} />
         </div>
         <TooltipContext.Provider
            value={{
               setTooltipCTX: (info) => {
                  setTooltip(info);
               },
            }}
         >
            <ContextMenuContext.Provider
               value={{
                  setContextMenuCTX: (info) => {
                     setContextMenu(info);
                  },
               }}
            >
               <ServerBar />
               <SideBar />
               {server.newChannels.length > 0 ||
               server.categories.every((c) => {
                  return c.channels.length > 0;
               }) ? (
                  <div className={styles["content-container"]}>
                     <Header />
                     <div className={styles.feed}>
                        <Chat />
                        <MembersBar />
                     </div>
                  </div>
               ) : (
                  <div className={styles["channel-dne-container"]}>
                     <img className={styles["channel-dne-image"]} src={NoChannelsImage.src} />
                     <h1 className={styles["channel-dne-title"]}>Text channel doesn't exist</h1>
                     <div className={styles["channel-dne-text"]}>
                        Seems like you've come to the wrong place. You might not have permission to access this channel
                        or there might not be any channels at all in this server.
                     </div>
                  </div>
               )}
            </ContextMenuContext.Provider>
         </TooltipContext.Provider>
      </div>
   );
};

export default Home;
