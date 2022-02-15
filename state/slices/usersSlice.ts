import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PrivateUser, Status } from "../../types/Data";

const usersInitState: PrivateUser[] = [
   { 
      data: { 
         username: "Genzou", 
         discriminator: 0, 
         id: 12345678, 
         profilePic: "", 
         status: Status.Online 
      },
      friendIDs: [], 
      directMessages: [] 
   }
];

const usersSlice = createSlice({
   name: "usersS",
   initialState: usersInitState,
   reducers: {
      addUser: (state, action: PayloadAction<PrivateUser>) => {
         state.push(action.payload);
      }
   }
})

export const { addUser } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;