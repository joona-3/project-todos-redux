import { combineReducers, configureStore } from "@reduxjs/toolkit";
import  modalReducer  from "./Reducers/modalSlice"
import { tasks } from "./Reducers/taskSlice";

const reducer = combineReducers({
  modal: modalReducer,
  tasks: tasks.reducer
});

export const store = configureStore({
  reducer: reducer,
});