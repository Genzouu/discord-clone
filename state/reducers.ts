import { combineReducers } from "redux";
import { selectionReducer } from "./slices/selectionSlice";
import { serversReducer } from "./slices/serversSlice";

const reducers = combineReducers({
   servers: serversReducer,
   selection: selectionReducer,
});

export default reducers;

export type StoreState = ReturnType<typeof reducers>;