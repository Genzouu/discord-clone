import { MouseEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";
import styles from "../styles/ContextMenuItem.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";
import { ContextMenuItemType } from "./ContextMenu";
import { SubContextMenu } from "./SubContextMenu";

export default function ContextMenuItem(props: ContextMenuItemType) {
   const [subMenuInfo, setShowSubMenu] = useState<{ isActive: boolean; parent?: HTMLElement }>({ isActive: false });

   const manageSubMenu = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
      if (props.subItems) {
         let item = e.currentTarget;
         setShowSubMenu({ isActive: true, parent: item });
      }
   };

   return (
      <div
         className={styles["context-menu-item"]}
         onMouseEnter={(e) => manageSubMenu(e)}
         onMouseLeave={() => setShowSubMenu({ isActive: false })}
      >
         <div className={styles["item-container"]}>
            <button
               className={`${styles["item"]} ${
                  styles[
                     props.textColourVariant === undefined
                        ? "normal-text"
                        : props.textColourVariant === ContextMenuColours.Invite
                        ? "invite-text"
                        : "delete-text"
                  ]
               }`}
               onClick={props.onClick}
            >
               {props.displayText}
               {props.hasCheckbox ? <RiCheckboxBlankLine className={styles["icon"]} /> : null}
               {props.subItems ? <IoIosArrowForward className={styles["icon"]} /> : null}
            </button>
            {props.hasLineAfter ? <hr className={styles["line"]} /> : null}
         </div>
         {subMenuInfo.isActive ? <SubContextMenu items={props.subItems!} parent={subMenuInfo.parent} /> : null}
      </div>
   );
}
