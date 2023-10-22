import React, { useState } from "react";
import PropTypes from "prop-types";

const TaskList = () => {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {};
  return (
    <>
      <h1>Task list</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <Task data={data} />
    </>
  );
};

TaskList.propTypes = {};

export default TaskList;
