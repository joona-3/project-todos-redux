import React from 'react'
import { useDispatch } from 'react-redux';
import { addTask} from '../Reducers/taskSlice';
import { useState } from 'react';

export const Task = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeModal());
      };

    const handleSubmit = (e) => {
        e.preventDefault();
    
    dispatch(
        addTask({
          text: text,
          isCompleted: false,
        })
      );
      // dispatch(closeModal());
    }
  return (
    <div className="task-container">
        <div className="task-header">
            <h2>Add your task</h2>
            <button onClick={handleClose}>Close</button>
        </div>
        <form className="task-form" onSubmit={handleSubmit}>
            <label htmlFor="text">What task are you going to achieve?</label>
            <input type="text" id="task" value={text} onChange={(e) => setText(e.target.value)} required/>
            <button type="submit">Save</button>
        </form>

    </div>
  )
}
