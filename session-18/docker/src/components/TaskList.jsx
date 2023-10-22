import React, { useEffect, useState } from "react";
import { addNewTask, deleteTask, getTasks, updateTask} from "../firebase/task.controller";

const task = {
  title: "New Task Title",
  description: "New Task Description",
};
const TaskList = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const [tasks, setTasks] = useState([]);
  const [mode, setMode] = useState("add");

  const createNewTask = (e) => {
    e.preventDefault();
    // add task to server
    addNewTask(task);
    getTasks().then((res) => setTasks([...res]));
    console.log(tasks);
  };

  useEffect(() => {
    getTasks().then((res) => setTasks([...res]));
  }, []);

  const editTask = (id) => {
    setMode("update");
    const taskToEdit = tasks.find((t) => t.id === id);
    setTasks({ ...taskToEdit });
  };
  const updateExistingTask = async () => {
    await updateTask(task);
    initializeTasks();
    setMode("add");
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    initializeTasks();
  };
  const initializeTasks = () => {
    getTasks()
      .then((t) => setTasks([...t]))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1 className="text-sky-700 font-semibold text-lg"> Tasks Lists</h1>
      <div className="flex flex-col gap-4">
        <h2>Introduce una nueva taks</h2>
        <form
          onSubmit={() =>
            mode === "add" ? createNewTask() : updateExistingTask()
          }
          className="border flex flex-col justify-center"
        >
          <input
            type="text"
            placeholder="title"
            value={task.title}
            className="border shadow otuline-none focus:ring ring-sky-200 rounded px-2 py-1 "
            onChange={(e) => setTask({ ...task, title: e.target.value })}
          />
          <textarea
            rows={3}
            cols={12}
            type="text"
            placeholder="description"
            value={task.description}
            className="border shadow otuline-none focus:ring ring-sky-200 rounded px-2 py-1 "
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
          <button
            type="submit"
            className="bg-sky-400 text-white-200 rounded shadow py-2 px-4 hover:bg-sky-500 transition font-semibold"
          >
            {mode === "add" ? "ADD" : "EDIT"}
          </button>
        </form>

        <button
          onClick={() => getTasks()}
          className="bg-sky-400 text-white-200 rounded shadow py-2 px-4 hover:bg-sky-500 transition font-semibold"
        >
          Get tasks
        </button>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {tasks.map((t, i) => (
            <div className="rounded border-sky-300 p-4 grid grid-cols-1 md:grid-cols-md bg-sky-800">
              <h1>{t.title}</h1>
              <div className="border-t border-sky-300 m-2"></div>
              <h2>{t.description}</h2>
              <div className="flex justify-between">
                <button
                  onClick={() => editTask(t.id)}
                  className="bg-sky-500 text-white py-1 px-2"
                >
                  Edit
                </button>
                <button
                  onClick={(id) =>
                    window.confirm("Seguro que quieres eliminar la tarea") &&
                    removeTask(id)
                  }
                  className="bg-red-600 text-white py-1 px-2"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskList;
