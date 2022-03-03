import { BiHash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../state/reducers";
import { removeChannel, setSelectedChannel } from "../state/slices/serversSlice";

import styles from "../styles/Channel.module.css";
import { ContextMenuColours } from "../types/ContextMenuColours";
import { ContextMenuCTX, ContextMenuItemType } from "./ContextMenu";

interface ChannelProps {
   name: string;
   categoryIndex: number;
   index: number;
}

export default function Channel(props: ChannelProps) {
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
         displayText: "Edit Channel",
         hasLineAfter: true,
         hasCheckbox: true,
         onClick: () => {},
      },
      {
         displayText: "Invite Friends",
         textColourVariant: ContextMenuColours.Invite,
         onClick: () => {},
      },
      {
         displayText: "Duplicate Channel",

         onClick: () => {},
      },
      {
         displayText: "Create Text Channel",
         onClick: () => {},
      },
      {
         displayText: "Copy Link",
         hasLineAfter: true,
         onClick: () => {},
      },
      {
         displayText: "Delete Category",
         textColourVariant: ContextMenuColours.Delete,
         hasLineAfter: true,
         // display "are you sure?" model
         onClick: () =>
            dispatch(
               removeChannel({
                  serverIndex: serverIndex,
                  categoryIndex: server.channelIndex,
                  removeIndex: server.categoryIndex,
               })
            ),
      },
      {
         displayText: "Copy ID",
         onClick: () => {},
      },
   ];

   return (
      <ContextMenuCTX>
         {(ctx) => (
            <div
               className={`${styles.channel} ${
                  server.categoryIndex === props.categoryIndex && server.channelIndex === props.index
                     ? styles.selected
                     : ""
               }`}
               onClick={() =>
                  dispatch(
                     setSelectedChannel({
                        serverIndex: serverIndex,
                        categoryIndex: props.categoryIndex,
                        channelIndex: props.index,
                     })
                  )
               }
               onContextMenu={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  ctx.setContextMenuCTX({ items: contextMenu, event: e });
               }}
            >
               <BiHash className={styles["channel-icon"]} />
               <p>{props.name}</p>
            </div>
         )}
      </ContextMenuCTX>
   );
}
