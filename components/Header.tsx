import styles from "../styles/Header.module.css";
import { BsMegaphoneFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";
import { SiGooglemessages } from "react-icons/Si";
import { FaBell } from "react-icons/fa";
import { BsPinAngleFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { MdInbox } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { toggleMembersBar } from "../state/slices/membersBarToggleSlice";
import { TooltipCTX } from "../pages";

export default function Header() {
   const dispatch = useDispatch();
   const selection = useSelector((state: StateType) => state.selection);
   const server = useSelector((state: StateType) => state.servers[selection.server]);
   const membersBarToggle = useSelector((state: StateType) => state.membersBarToggle);

   return (
      <TooltipCTX>
         {(ctx) => (
            <div className={styles.header}>
               <div className={styles["channel-container"]}>
                  {/* <BsMegaphoneFill className={styles["channel-icon"]} /> */}
                  <BiHash className={styles["channel-icon"]} />
                  <h1>
                     {server.categoryIndex >= 0
                        ? server.categories[server.categoryIndex].channels[server.channelIndex].name
                        : server.newChannels[server.channelIndex]?.name}
                  </h1>
                  <button className={styles["follow-button"]}>Follow</button>
                  {server.categories[server.categoryIndex]?.channels[server.channelIndex]?.description ? (
                     <>
                        <div className={styles.vl}></div>
                        <p className={styles.description}>
                           {server.categories[server.categoryIndex]?.channels[server.channelIndex]?.description}
                        </p>
                     </>
                  ) : null}
               </div>
               <div className={styles["toolbar-container"]}>
                  <SiGooglemessages
                     className={styles["toolbar-element"]}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: "Threads",
                           direction: "bottom",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  />
                  <FaBell
                     className={styles["toolbar-element"]}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: "Notification Settings",
                           direction: "bottom",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  />
                  <BsPinAngleFill
                     className={styles["toolbar-element"]}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: "Pinned Messages",
                           direction: "bottom",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  />
                  <ImUsers
                     className={`${styles["toolbar-element"]} ${membersBarToggle ? styles["members-bar-toggle"] : ""}`}
                     onClick={(e) => {
                        dispatch(toggleMembersBar());
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: membersBarToggle ? "Show Member List" : "Hide Member List", // The state hasn't updated yet so I have to do the reverse
                           direction: "bottom",
                        });
                     }}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: membersBarToggle ? "Hide Member List" : "Show Member List",
                           direction: "bottom",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  />
                  <div className={styles["toolbar-searchbar-container"]}>
                     <input className={styles["toolbar-searchbar"]} placeholder="Search"></input>
                     <BiSearch className={styles["searchbar-search-icon"]} />
                  </div>
                  <MdInbox
                     className={styles["toolbar-element"]}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: "Inbox",
                           direction: "bottom",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  />
                  <a
                     className={styles["link-container"]}
                     href="https://support.discord.com/hc"
                     target="_blank"
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: "Help",
                           direction: "left",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
                  >
                     <IoMdHelpCircle className={styles["toolbar-element"]} />
                  </a>
               </div>
            </div>
         )}
      </TooltipCTX>
   );
}
