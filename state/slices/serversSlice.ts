import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Data, { PostType } from "../../types/Data";

const serversInitState: Data["servers"] = [
   {
      name: "placeholder",
      categoryIndex: 0,
      channelIndex: 0,
      newChannels: [],
      categories: [{ name: "text channels", channels: [{ name: "general", description: "", posts: [] }] }],
      members: [],
   },
];

const serversSlice = createSlice({
   name: "servers",
   initialState: serversInitState,
   reducers: {
      addServer: (state, action: PayloadAction<string>) => {
         state.push(serversInitState[0]);
      },
      removeServer: (state, action: { payload: { removeIndex: number } }) => {
         state.splice(action.payload.removeIndex, 1);
      },
      setSelectedChannel: (
         state,
         action: { payload: { serverIndex: number; categoryIndex: number; channelIndex: number } }
      ) => {
         state[action.payload.serverIndex].categoryIndex = action.payload.categoryIndex;
         state[action.payload.serverIndex].channelIndex = action.payload.channelIndex;
      },
      addCategory: (state, action: { payload: { serverIndex: number; name: string } }) => {
         state[action.payload.serverIndex].categories.push({ name: action.payload.name, channels: [] });
      },
      removeCategory: (state, action: { payload: { serverIndex: number; removeIndex: number } }) => {
         state[action.payload.serverIndex].categories.splice(action.payload.removeIndex, 1);
      },
      addChannel: (
         state,
         action: { payload: { serverIndex: number; categoryIndex: number; name: string; description: string } }
      ) => {
         state[action.payload.serverIndex].categoryIndex = action.payload.categoryIndex;
         if (action.payload.categoryIndex >= 0) {
            state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels.push({
               name: action.payload.name,
               description: action.payload.description,
               posts: [],
            });
            state[action.payload.serverIndex].channelIndex =
               state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels.length - 1;
         } else {
            state[action.payload.serverIndex].newChannels.push({
               name: action.payload.name,
               description: action.payload.description,
               posts: [],
            });
            state[action.payload.serverIndex].channelIndex = state[action.payload.serverIndex].newChannels.length - 1;
         }
      },
      removeChannel: (
         state,
         action: { payload: { serverIndex: number; categoryIndex: number; removeIndex: number } }
      ) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels.splice(
            action.payload.removeIndex,
            1
         );
      },
      addPost: (
         state,
         action: { payload: { serverIndex: number; categoryIndex: number; channelIndex: number; post: PostType } }
      ) => {
         if (action.payload.categoryIndex >= 0) {
            state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[
               action.payload.channelIndex
            ].posts.push(action.payload.post);
         } else {
            state[action.payload.serverIndex].newChannels[action.payload.channelIndex].posts.push(action.payload.post);
         }
      },
      editPost: (
         state,
         action: {
            payload: {
               serverIndex: number;
               categoryIndex: number;
               channelIndex: number;
               postIndex: number;
               message: string;
            };
         }
      ) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[
            action.payload.channelIndex
         ].posts[action.payload.postIndex].message = action.payload.message;
      },
      removePost: (
         state,
         action: { payload: { serverIndex: number; categoryIndex: number; channelIndex: number; removeIndex: number } }
      ) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[
            action.payload.channelIndex
         ].posts.splice(action.payload.removeIndex, 1);
      },
   },
});

export const {
   addServer,
   removeServer,
   setSelectedChannel,
   addCategory,
   removeCategory,
   addChannel,
   removeChannel,
   addPost,
   editPost,
   removePost,
} = serversSlice.actions;

export const serversReducer = serversSlice.reducer;
