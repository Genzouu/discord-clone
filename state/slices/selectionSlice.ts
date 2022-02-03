import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const selectionInitState = { server: 0, category: 0, channel: 0 }

const selectionSlice = createSlice({
   name: "selection",
   initialState: selectionInitState,
   reducers: {
      setSelectedServer: (state, action: PayloadAction<number>) => {
         state.server = action.payload;
      },
      setSelectedChannel: (state, action: { payload: { category: number, channel: number } }) => {
         state.category = action.payload.category;
         state.channel = action.payload.channel;
      },
   }
})

export const { setSelectedServer, setSelectedChannel } = selectionSlice.actions;

export const selectionReducer = selectionSlice.reducer;