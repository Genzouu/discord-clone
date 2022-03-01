import { ContextMenuItemType } from "../../components/ContextMenu";
import { ContextMenuColours } from "../../types/ContextMenuColours";

export const ownerTextChannelsContextMenu: ContextMenuItemType[] = [
   {
      displayText: "Set as Read",
      hasLineAfter: true,
   },
   {
      displayText: "Invite Friends",
      textColourVariant: ContextMenuColours.Invite,
      hasLineAfter: true,
   },
   {
      displayText: "Turn Server Notifications Off",
      subItems: [],
   },
   {
      displayText: "Notification Settings",
      subItems: [],
   },
   {
      displayText: "Hide Muted Channels",
      hasCheckbox: true,
      hasLineAfter: true,
   },
   {
      displayText: "Server Settings",
      subItems: [],
   },
   {
      displayText: "Privacy Settings",
   },
   {
      displayText: "Edit Server Profile",
      hasLineAfter: true,
   },
   {
      displayText: "Create Channel",
   },
   {
      displayText: "Create Category",
   },
   {
      displayText: "Create Event",
      hasLineAfter: true,
   },
   {
      displayText: "Leave Server",
      textColourVariant: ContextMenuColours.Delete,
      hasLineAfter: true,
   },
   {
      displayText: "Copy ID",
   },
];
