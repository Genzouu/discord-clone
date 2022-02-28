import { HiOutlinePlusSm } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { addChannel } from "../state/slices/serversSlice";

import styles from "../styles/Category.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";
import { Channel } from "../types/Data";
import ChannelComponent from "./Channel";
import { ContextMenuCTX, ContextMenuElement } from "./ContextMenu";
import { TooltipCTX } from "./Tooltip";

interface CategoryProps {
   name: string;
   channels: Channel[];
   index: number;
}

export default function Category(props: CategoryProps) {
   const dispatch = useDispatch();
   const selection = useSelector((state: StateType) => state.selection);

   const categorySidebarContextMenu: ContextMenuElement[] = [
      {
         displayText: "Set as Read",
         isSelectable: false,
         hasLineAfter: true,
         onHover: () => {},
      },
      {
         displayText: "Turn Category Notifications Off",
         subElements: [],
         onHover: () => {},
      },
      {
         displayText: "Notification Settings",
         subElements: [],
         hasLineAfter: true,
         onHover: () => {},
      },
      {
         displayText: "Collapse Category",
         hasCheckbox: true,
         onClick: () => {},
      },
      {
         displayText: "Collapse All Categories",
         onClick: () => {},
      },
      {
         displayText: "Edit Category",
         hasLineAfter: true,
         onClick: () => {},
      },
      {
         displayText: "Delete Category",
         textColourVariant: ContextMenuColours.Delete,
         hasLineAfter: true,
         onClick: () => {},
      },
      {
         displayText: "Copy ID",
         onClick: () => {},
      },
   ];

   const addNewChannel = () => {
      dispatch(
         addChannel({
            serverIndex: selection.server,
            categoryIndex: props.index,
            name: "new channel " + props.channels.length,
            description: "new description",
         })
      );
      // open this category if the user adds a new channel (in case it's closed)
      (document.getElementById("categories-container")!.children[props.index].children[1] as HTMLDetailsElement).open =
         true;
   };

   return (
      <TooltipCTX>
         {(tooltipCTX) => (
            <ContextMenuCTX>
               {(contextMenuCTX) => (
                  <div
                     className={styles["category"]}
                     onContextMenu={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        contextMenuCTX.setContextMenuCTX({ elements: categorySidebarContextMenu, event: e });
                     }}
                  >
                     <HiOutlinePlusSm
                        className={styles["add-channel-icon"]}
                        onClick={() => addNewChannel()}
                        onMouseEnter={(e) => {
                           tooltipCTX.setTooltipCTX({
                              caller: e.currentTarget,
                              text: "Create a Channel",
                              direction: "top",
                           });
                        }}
                        onMouseLeave={() => {
                           tooltipCTX.setTooltipCTX({ text: "" });
                        }}
                     />
                     <details className={styles["category-details"]}>
                        <summary className={styles["category-summary"]}>
                           <MdKeyboardArrowRight className={styles["expand-section-icon"]} />
                           <p className={styles["category-name"]}>{props.name}</p>
                        </summary>
                        {props.channels.map((channel, index) => (
                           <ChannelComponent
                              name={channel.name}
                              categoryIndex={props.index}
                              index={index}
                              key={index}
                           />
                        ))}
                     </details>
                  </div>
               )}
            </ContextMenuCTX>
         )}
      </TooltipCTX>
   );
}
