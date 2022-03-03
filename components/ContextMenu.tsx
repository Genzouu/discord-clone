import { createContext, MouseEvent, useEffect } from "react";
import { ContextMenuTemplateItemType } from "../public/context-menus/contextMenuTemplates";

import styles from "../styles/ContextMenu.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";
import ContextMenuItem from "./ContextMenuItem";

export interface ContextMenuItemType extends ContextMenuTemplateItemType {
   // displayText: string;
   // textColourVariant?: ContextMenuColours;
   // isSelectable?: boolean;
   // hasCheckbox?: boolean;
   // hasLineAfter?: boolean;
   // subItems?: ContextMenuItemType[];
   onClick?: () => void;
   onHover?: () => void;
}

export interface ContextMenuProps {
   items: ContextMenuItemType[];
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
         {props.items.map((item, index) => (
            <>
               <ContextMenuItem
                  displayText={item.displayText}
                  textColourVariant={item.textColourVariant}
                  hasCheckbox={item.hasCheckbox}
                  subItems={item.subItems}
                  onClick={item.onClick}
                  onHover={item.onHover}
                  key={index}
               />
               {item.hasLineAfter ? <hr className={styles["line"]} key={props.items.length + index} /> : null}
            </>
         ))}
      </div>
   );
}
