import { ContextMenuItemType } from "../../components/ContextMenu";
import { ContextMenuColours } from "../../types/ContextMenuColours";

export interface ContextMenuTemplateItemType {
   displayText: string;
   textColourVariant?: ContextMenuColours;
   isSelectable?: boolean;
   hasCheckbox?: boolean;
   hasLineAfter?: boolean;
   subItems?: ContextMenuItemType[];
}

export const setAsReadCTXItem: ContextMenuTemplateItemType = {
   displayText: "Set as Read",
   isSelectable: false,
   hasLineAfter: true,
};

export const muteCTXItem: ContextMenuTemplateItemType = {
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
};

export const notificationSettingsCTXItem: ContextMenuTemplateItemType = {
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
};

export const deleteCTXItem: ContextMenuTemplateItemType = {
   displayText: "Delete Category",
   textColourVariant: ContextMenuColours.Delete,
   hasLineAfter: true,
};
