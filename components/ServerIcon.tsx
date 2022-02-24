import { useContext, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { TooltipCTX } from "../pages";
import { StateType } from "../state/reducers";
import styles from "../styles/ServerIcon.module.css";

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

   return (
      <TooltipCTX>
         {(ctx) => (
            <div className={`${styles["server-icon"]} ${props.index === serverIndex ? styles["selected"] : ""}`}>
               {typeof props.icon === "string" ? (
                  <img
                     className={`${styles["icon-button"]}`}
                     src={typeof props.icon === "string" ? props.icon : ""}
                     onClick={props.onClick}
                     onMouseEnter={(e) => {
                        ctx.setTooltipInfoCTX({ caller: e.currentTarget, text: server.name, direction: "right" });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
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
                        ctx.setTooltipInfoCTX({
                           caller: e.currentTarget,
                           text: props.tooltipText!,
                           direction: "right",
                        });
                     }}
                     onMouseLeave={() => {
                        ctx.setTooltipInfoCTX({ text: "" });
                     }}
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
   );
}
