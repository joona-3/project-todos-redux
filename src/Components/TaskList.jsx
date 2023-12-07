import { useSelector, useDispatch } from 'react-redux';
import { removeTask, completeTask} from '../Reducers/taskSlice';

export const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);
  const count = taskList.length
  const uncompletedCount = taskList.filter((task) => !task.isCompleted).length;
  const dispatch = useDispatch();

  return (
    <div>
    <p>Total Tasks: {count}</p>
      <p>Uncompleted Tasks: {uncompletedCount}</p>
        {console.log(taskList)}
      {taskList.map((task) => (
        <div key={task.id}>
          <p>{task.text}</p>
          <p>{task.isCompleted ? 'Completed' : 'Not Completed'}</p>
          <button onClick={() => dispatch(completeTask(task.id))}>
            {task.isCompleted ? 'Mark as Not Completed' : 'Mark as Completed'}
          </button>
          <button onClick={() => dispatch(removeTask(task.id))}>Remove Task</button>
        </div>
      ))}
    </div>
  );
};