import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, text: 'Watch video on actions & reducers', isCompleted: true },
  { id: 2, text: 'Follow redux codealong', isCompleted: true },
  { id: 3, text: 'Fork weekly assignment', isCompleted: true },
  { id: 4, text: 'Create a todo app', isCompleted: false },
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