import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Data, { Channel, Category, Post } from "../../types/Data";

const serversInitState: Data['servers'] = [{name: "placeholder", categories: [], members: []}];

const serversSlice = createSlice({
   name: "servers",
   initialState: serversInitState,
   reducers: {
      addServer: (state, action: PayloadAction<string>) => {
         let newServer: Data['servers'][0] = { name: action.payload, categories: [], members: [] }
         state.push(newServer);
      },
      removeServer: (state, action: { payload: { removeIndex: number } }) => {
         state.splice(action.payload.removeIndex, 1);
      },
      addCategory: (state, action: { payload: { serverIndex: number, name: string } }) => {
         state[action.payload.serverIndex].categories.push({ name: action.payload.name, channels: [] });
      },
      removeCategory: (state, action: { payload: { serverIndex: number, removeIndex: number } }) => {
         state[action.payload.serverIndex].categories.splice(action.payload.removeIndex, 1);
      },
      addChannel: (state, action: { payload: { serverIndex: number, categoryIndex: number, name: string } }) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels.push({name: action.payload.name, posts: []});
      },
      removeChannel: (state, action: { payload: { serverIndex: number, categoryIndex: number, removeIndex: number } }) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels.splice(action.payload.removeIndex, 1);
      },
      addPost: (state, action: { payload: { serverIndex: number, categoryIndex: number, channelIndex: number, post: Post } }) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[action.payload.channelIndex].posts.push(action.payload.post);
      },
      editPost: (state, action: { payload: { serverIndex: number, categoryIndex: number, channelIndex: number, postIndex: number, message: string } }) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[action.payload.channelIndex].posts[action.payload.postIndex].message = action.payload.message;
      },
      removePost: (state, action: { payload: { serverIndex: number, categoryIndex: number, channelIndex: number, removeIndex: number } }) => {
         state[action.payload.serverIndex].categories[action.payload.categoryIndex].channels[action.payload.channelIndex].posts.splice(action.payload.removeIndex, 1);
      },
   },
});

export const { addServer, removeServer, addCategory, removeCategory, addChannel, removeChannel, addPost, editPost, removePost } = serversSlice.actions;

export const serversReducer = serversSlice.reducer;