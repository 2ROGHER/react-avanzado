import React from 'react';

const Task = ({ tasks }) => {
    return (
        <ul>
        { tasks.map((t, i) => <li key={i}>{t}</li>)}
        </ul>
    );
}

export default Task;
