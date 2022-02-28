import { createContext, MouseEvent, useEffect } from "react";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { IoIosCheckbox } from "react-icons/io";

import styles from "../styles/ContextMenu.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";

export interface ContextMenuElement {
   displayText: string;
   textColourVariant?: ContextMenuColours;
   isSelectable?: boolean;
   hasCheckbox?: boolean;
   hasLineAfter?: boolean;
   subElements?: ContextMenuElement[];
   onClick?: () => void;
   onHover?: () => void;
}

export interface ContextMenuProps {
   elements: ContextMenuElement[];
   event?: MouseEvent<HTMLElement, globalThis.MouseEvent>;
}

export const ContextMenuContext = createContext({
   setContextMenuCTX: (data: ContextMenuProps) => {},
});

export const ContextMenuCTX = ContextMenuContext.Consumer;

export default function ContextMenu(props: ContextMenuProps) {
   useEffect(() => {
      if (typeof window !== undefined && props.event) {
         props.event.stopPropagation();
         let contextMenu = document.getElementById("context-menu") as HTMLDivElement;
         contextMenu.style.display = "flex";
         contextMenu.style.top =
            (contextMenu.offsetHeight + props.event!.pageY + 12 > window.innerHeight
               ? window.innerHeight - contextMenu.offsetHeight - 12
               : props.event!.pageY) + "px";
         contextMenu.style.left = props.event!.pageX.toString() + "px";
      }
   }, [props.event]);

   return (
      <div id="context-menu" className={styles["context-menu"]}>
         {props.elements.map((item, index) => (
            <div className={styles["item-container"]} key={index}>
               <button
                  className={`${styles["item"]} ${
                     styles[
                        item.textColourVariant === undefined
                           ? "normal-text"
                           : item.textColourVariant === ContextMenuColours.Invite
                           ? "invite-text"
                           : "delete-text"
                     ]
                  }`}
                  onClick={item.onClick}
               >
                  {item.displayText}
                  {item.hasCheckbox ? <RiCheckboxBlankLine className={styles["checkbox"]} /> : null}
               </button>
               {item.hasLineAfter ? <hr className={styles["line"]} /> : null}
            </div>
         ))}
      </div>
   );
}
