import { HiOutlinePlusSm } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { addChannel, removeCategory } from "../state/slices/serversSlice";

import styles from "../styles/Category.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";
import { Channel } from "../types/Data";
import ChannelComponent from "./Channel";
import { ContextMenuCTX, ContextMenuItemType } from "./ContextMenu";
import { TooltipCTX } from "./Tooltip";

interface CategoryProps {
   name: string;
   channels: Channel[];
   index: number;
}

export default function Category(props: CategoryProps) {
   const dispatch = useDispatch();
   const serverIndex = useSelector((state: StateType) => state.selection.server);
   const server = useSelector((state: StateType) => state.servers[serverIndex]);

   const contextMenu: ContextMenuItemType[] = [
      {
         displayText: "Set as Read",
         isSelectable: false,
         hasLineAfter: true,
         onClick: () => {},
      },
      {
         displayText: "Mute Category",
         subItems: [
            {
               displayText: "15 Minutes",
            },
            {
               displayText: "1 Hour",
            },
            {
               displayText: "3 Hours",
            },
            {
               displayText: "8 Hours",
            },
            {
               displayText: "24 Hours",
            },
            {
               displayText: "Until Unmuted",
            },
         ],
         onHover: () => {},
      },
      {
         displayText: "Notification Settings",
         subItems: [
            {
               displayText: "Use Default Server Settings",
            },
            {
               displayText: "Every Message",
            },
            {
               displayText: "@mentions Only",
            },
            {
               displayText: "Mute",
            },
         ],
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
         // display "are you sure?" model
         onClick: () => dispatch(removeCategory({ serverIndex: serverIndex, removeIndex: server.categoryIndex })),
      },
      {
         displayText: "Copy ID",
         onClick: () => {},
      },
   ];

   const addNewChannel = () => {
      dispatch(
         addChannel({
            serverIndex: serverIndex,
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
                        contextMenuCTX.setContextMenuCTX({ items: contextMenu, event: e });
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
