import { combineReducers } from "redux";
import { membersBarToggleReducer } from "./slices/membersBarToggleSlice";
import { selectionReducer } from "./slices/selectionSlice";
import { serversReducer } from "./slices/serversSlice";
import { usersReducer } from "./slices/usersSlice";

const reducers = combineReducers({
   servers: serversReducer,
   selection: selectionReducer,
   users: usersReducer,
   membersBarToggle: membersBarToggleReducer,
});

export default reducers;

export type StateType = ReturnType<typeof reducers>;
