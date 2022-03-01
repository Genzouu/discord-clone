import { ContextMenuItemType } from "../../components/ContextMenu";
import { ContextMenuColours } from "../../types/ContextMenuColours";

export const categorySidebarContextMenu: ContextMenuItemType[] = [
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
            displayText: "Test",
         },
         {
            displayText: "Test",
         },
         {
            displayText: "Test",
         },
         {
            displayText: "Test",
         },
      ],
      onHover: () => {},
   },
   {
      displayText: "Notification Settings",
      subItems: [],
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
