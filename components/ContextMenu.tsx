import styles from "../styles/ContextMenu.module.css"
import { ContextMenuColours } from "../types/ContextMenuColours"

export interface ContextMenuType {
   displayText: string,
   textColourVariant?: ContextMenuColours,
   isActive?: boolean,
   hasCheckbox?: boolean,
   hasLineAfter?: boolean,
   onClick?: () => void,
   onHover?: () => void,
}

export interface ContextMenuProps {
   data: ContextMenuType[]
}

export default function ContextMenu(props: ContextMenuProps) {

   // move the positional logic into here

   return (
      <div id="context-menu" className={styles["context-menu"]}>
         {props.data.map((item, index) => (
            <div className={styles["item-container"]} key={index}>
               <button 
                  className={`${styles["item"]} ${styles[item.textColourVariant === undefined ? "normal-text" : item.textColourVariant === ContextMenuColours.Invite ? "invite-text" : "delete-text"]}`}
                  onClick={item.onClick}
               >
                  {item.displayText}
               </button>
               { item.hasLineAfter ? <hr className={styles["line"]}/> : null }
            </div>
         ))}
      </div>
   )
}