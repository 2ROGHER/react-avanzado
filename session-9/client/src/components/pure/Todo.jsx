import React, { useState } from "react";
import PropTypes from "prop-types";

const Todo = ({ todos }) => {
  const { id, text, title, completed } = todos;
  const [check, setCheck] = useState(completed);
  return (
    <div data-testid={`todo-test-${id}`}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          id="checkbox"
          onChange={() => setCheck(!check)}
        />
      </div>
      {text}
      {title}
      {completed}
    </div>
  );
};

Todo.propTypes = {
  todos: PropTypes.object.isRequired,
};

export default Todo;
