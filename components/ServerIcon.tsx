import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { ownerTextChannelsContextMenu } from "../public/context-menus/serverIconCTXMenu";
import { StateType } from "../state/reducers";
import styles from "../styles/ServerIcon.module.css";
import { ContextMenuCTX } from "./ContextMenu";
import { TooltipCTX } from "./Tooltip";

interface ServerIconProps {
   icon: string | IconType;
   colourVariant?: ServerIconColourVariant;
   showPill: boolean;
   onClick?: () => void;
   index?: number;
   tooltipText?: string;
}

export enum ServerIconColourVariant {
   Green,
   None,
}

export default function ServerIcon(props: ServerIconProps) {
   const serverIndex = useSelector((state: StateType) => state.selection.server);
   const server = useSelector((state: StateType) => state.servers[serverIndex]);

   // owner of server, no text channels menu
   // owner of server, text channels menu
   // member of server menu

   return (
      <ContextMenuCTX>
         {(contextMenuCTX) => (
            <TooltipCTX>
               {(tooltipCTX) => (
                  <div className={`${styles["server-icon"]} ${props.index === serverIndex ? styles["selected"] : ""}`}>
                     {typeof props.icon === "string" ? (
                        <img
                           className={`${styles["icon-button"]}`}
                           src={typeof props.icon === "string" ? props.icon : ""}
                           onClick={props.onClick}
                           onMouseEnter={(e) => {
                              tooltipCTX.setTooltipCTX({
                                 caller: e.currentTarget,
                                 text: server.name,
                                 direction: "right",
                              });
                           }}
                           onMouseLeave={() => {
                              tooltipCTX.setTooltipCTX({ text: "" });
                           }}
                           onContextMenu={(e) =>
                              contextMenuCTX.setContextMenuCTX({ elements: ownerTextChannelsContextMenu, event: e })
                           }
                        />
                     ) : (
                        <div
                           className={`${styles["icon-button"]} ${styles["icon-wrapper"]} ${
                              props.colourVariant === ServerIconColourVariant.Green
                                 ? styles["icon-button-green"]
                                 : styles["icon-button-none"]
                           }`}
                           onClick={props.onClick}
                           onMouseEnter={(e) => {
                              tooltipCTX.setTooltipCTX({
                                 caller: e.currentTarget,
                                 text: props.tooltipText!,
                                 direction: "right",
                              });
                           }}
                           onMouseLeave={() => {
                              tooltipCTX.setTooltipCTX({ text: "" });
                           }}
                           onContextMenu={(e) =>
                              contextMenuCTX.setContextMenuCTX({ elements: ownerTextChannelsContextMenu, event: e })
                           }
                        >
                           <props.icon className={styles["icon"]} />
                        </div>
                     )}
                     {props.showPill ? (
                        <div className={styles["pill-container"]}>
                           <div className={styles.pill}></div>
                        </div>
                     ) : null}
                  </div>
               )}
            </TooltipCTX>
         )}
      </ContextMenuCTX>
   );
}
