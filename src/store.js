import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tasks } from "./Reducers/taskSlice";

const reducer = combineReducers({
  tasks: tasks.reducer
});

export const store = configureStore({
  reducer: reducer,
});