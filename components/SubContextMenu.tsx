import { useEffect } from "react";
import styles from "../styles/SubContextMenu.module.css";
import { ContextMenuItemType } from "./ContextMenu";
import ContextMenuItem from "./ContextMenuItem";

export interface SubContextMenuProps {
   items: ContextMenuItemType[];
   parent?: HTMLElement;
}

export function SubContextMenu(props: SubContextMenuProps) {
   useEffect(() => {
      if (typeof window !== undefined) {
         let subMenu = props.parent?.children[1] as HTMLDivElement;
         let parentRect = props.parent!.getBoundingClientRect();
         subMenu.style.left = parentRect.right + "px";
         subMenu.style.top = parentRect.top + "px";
      }
   }, []);

   return (
      <div className={styles["sub-context-menu-container"]}>
         <div className={styles["sub-context-menu"]}>
            {props.items.map((item, index) => (
               <ContextMenuItem
                  displayText={item.displayText}
                  textColourVariant={item.textColourVariant}
                  hasCheckbox={item.hasCheckbox}
                  subItems={item.subItems}
                  onClick={item.onClick}
                  onHover={item.onHover}
                  key={index}
               />
            ))}
         </div>
      </div>
   );
}
