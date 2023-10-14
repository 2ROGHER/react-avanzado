import React from "react";
import useList from "../../hooks/useList";

const TaskList = () => {
  const tasks = useList([]);

  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(newTask);
    setNewTask("");
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  return (
    <div>
      <h1>*** Task List ***</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          name="new-task"
          id="input-new-task"
          onChange={handleInputChange}
          placeholder="New task"
        />
        <button type="submit">Create task</button>
      </form>
      {tasks.isEmpty() ? (
        <p>Task list is Empty</p>
      ) : (
        <ul>
          {tasks.value.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                name=""
                id=""
                onClick={() => tasks.remove(index)}
                checked={false}
              />
              {task}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
