import { useEffect } from "react";
import { IconType } from "react-icons";
import { useSelector } from "react-redux";
import { Store } from "../state/reducers";
import styles from "../styles/ServerIcon.module.css";
import blankIcon from "../public/blank48x48.png";

interface ServerIconProps {
   icon: string | IconType;
   colourVariant?: ServerIconColourVariant;
   showPill: boolean;
   onClick?: () => void;
   index?: number;
}

export enum ServerIconColourVariant {
   Green,
   None,
}

export default function ServerIcon(props: ServerIconProps) {
   const selection = useSelector((state: Store) => state.selection);

   return (
      <div className={`${styles["server-icon"]} ${props.index === selection.server ? styles["selected"] : ""}`}>
         {typeof props.icon === "string" ? (
            <img
               className={`${styles["icon-button"]}`}
               src={typeof props.icon === "string" ? props.icon : ""}
               onClick={props.onClick}
            />
         ) : (
            <div
               className={`${styles["icon-button"]} ${styles["icon-wrapper"]} ${
                  props.colourVariant === ServerIconColourVariant.Green
                     ? styles["icon-button-green"]
                     : styles["icon-button-none"]
               }`}
               onClick={props.onClick}
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
   );
}
