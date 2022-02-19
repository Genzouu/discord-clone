import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PrivateUser, Status } from "../../types/Data";
import { members } from "../../public/members";

const usersInitState: PrivateUser[] = members.map((member) => ({
   data: member,
   friendIDs: [],
   directMessages: [],
}));

const usersSlice = createSlice({
   name: "usersS",
   initialState: usersInitState,
   reducers: {
      addUser: (state, action: PayloadAction<PrivateUser>) => {
         state.push(action.payload);
      },
   },
});

export const { addUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
