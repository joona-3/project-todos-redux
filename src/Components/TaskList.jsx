import { useSelector, useDispatch } from 'react-redux';
import { removeTask, completeTask} from '../Reducers/taskSlice';

export const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);
  const count = taskList.length
  const uncompletedCount = taskList.filter((task) => !task.isCompleted).length;
  const dispatch = useDispatch();

  return (
    <div className="tasklist-container">
      <div className="tasklist-count-wrapper">
        <p>Total Tasks: {count}</p>
        <p>Uncompleted Tasks: {uncompletedCount}</p>
      </div>
        {console.log(taskList)}
      {taskList.map((task) => (
        <div className="task-container" key={task.id}>
          <p>{task.text}</p>
          <p>{task.isCompleted ? 'Completed' : 'Not Completed'}</p>
          <button className="complete-button"onClick={() => dispatch(completeTask(task.id))}>
            {task.isCompleted ? 'Mark as Not Completed' : 'Mark as Completed'}
          </button>
          <button className="remove-button"onClick={() => dispatch(removeTask(task.id))}>Remove Task</button>
        </div>
      ))}
    </div>
  );
};