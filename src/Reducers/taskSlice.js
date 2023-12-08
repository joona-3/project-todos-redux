import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: "Finishing up Technigo's JavaScript & React course ", isCompleted: false },
];

export const tasks = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: state.length + 1,
        text: action.payload,
        isCompleted: false,
      });
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((task) => task.id !== taskId);
    },
    completeTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    countAllTasks: (state) => state.length,
    countUncompletedTasks: (state) => state.filter((task) => !task.isCompleted).length,
  },
});

export const { addTask, removeTask, completeTask, countAllTasks, countUncompletedTasks } = tasks.actions;

export default tasks.reducer;