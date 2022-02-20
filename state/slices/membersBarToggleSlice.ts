import { createSlice } from "@reduxjs/toolkit";

const membersBarToggleInitState = true;

const membersBarToggleSlice = createSlice({
   name: "membersBarToggle",
   initialState: membersBarToggleInitState,
   reducers: {
      toggleMembersBar: (state) => {
         return (state = !state);
      },
   },
});

export const { toggleMembersBar } = membersBarToggleSlice.actions;
export const membersBarToggleReducer = membersBarToggleSlice.reducer;
