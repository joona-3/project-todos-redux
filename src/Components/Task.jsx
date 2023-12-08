import { useDispatch } from 'react-redux';
import { addTask} from '../Reducers/taskSlice';
import { useState } from 'react';

export const Task = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
   

    const handleSubmit = (e) => {
        e.preventDefault();
  
    dispatch(
        addTask(text)
      );
      setText("");
    }
  return (
    <div className="add-task-container">
        <div className="add-task-header">
            <h2>Let's Get Things Done</h2>
        </div>
        <form className="add-task-form" onSubmit={handleSubmit}>
            <label htmlFor="text">What task are you going to achieve?</label>
            <input type="text" id="task" value={text} onChange={(e) => setText(e.target.value)} required/>
            <button type="submit">Add your task</button>
        </form>

    </div>
  )
}
