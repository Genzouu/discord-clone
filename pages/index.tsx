import type { NextPage } from "next";

import ServerBar from "../components/ServerBar";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import MembersBar from "../components/MembersBar";
import Chat from "../components/Chat";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import { createContext, useEffect, useState } from "react";

import NoChannelsImage from "../public/channel-dne.svg";
import { StateType } from "../state/reducers";
import Tooltip from "../components/Tooltip";

interface TooltipInfo {
   text: string;
   direction?: "left" | "right" | "top" | "bottom";
   caller?: Element;
}

const TooltipContext = createContext({
   setTooltipInfoCTX: (info: TooltipInfo) => {},
});

const Home: NextPage = () => {
   const serverIndex = useSelector((state: StateType) => state.selection.server);
   const server = useSelector((state: StateType) => state.servers[serverIndex]);
   const [tooltipInfo, setTooltipInfo] = useState<TooltipInfo>({
      text: "",
   });

   useEffect(() => {
      if (process.browser) {
         document.addEventListener("contextmenu", (e) => {
            e.preventDefault();
         });
      }
   }, []);  

   return (
      <div className={styles.wrapper}>
         <Tooltip text={tooltipInfo.text} direction={tooltipInfo.direction} caller={tooltipInfo.caller} />
         <TooltipContext.Provider
            value={{
               setTooltipInfoCTX: (info) => {
                  setTooltipInfo(info);
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
                     Seems like you've come to the wrong place. You might not have permission to access this channel or
                     there might not be any channels at all in this server.
                  </div>
               </div>
            )}
         </TooltipContext.Provider>
      </div>
   );
};

export default Home;

export const TooltipCTX = TooltipContext.Consumer;
