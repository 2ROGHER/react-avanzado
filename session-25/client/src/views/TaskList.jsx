import React from 'react';
import Task from './Task';

// En la lista de notas que es nuestra vista, no se debe encontrar codigo o la logica
// de nuestro negocio, este debe estar en otro lugar del codigo

const TaskList = () => {

    return (
        <div>
            Esta es la lista de tareas pendientes
            <Task tasks={['task 1', 'task 2', 'task3']} />
        </div>
    );
}

export default TaskList;
