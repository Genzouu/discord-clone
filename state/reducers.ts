import { combineReducers } from "redux";
import { selectionReducer } from "./slices/selectionSlice";
import { serversReducer } from "./slices/serversSlice";
import { usersReducer } from "./slices/usersSlice";

const reducers = combineReducers({
   servers: serversReducer,
   selection: selectionReducer,
   users: usersReducer,
});

export default reducers;

export type Store = ReturnType<typeof reducers>;