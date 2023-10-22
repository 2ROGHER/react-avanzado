import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

/**
 * Aplicacion principal en el que trabajaremos.
 * @param {Object} props 
 * @returns 
 */
function App(props) {
  const [mode, setMode] = useState(false);
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  /**
   * Esta funcion cambia el estado del componete mediante el imput.
   * @param {object} e 
   * @returns Esta funcion cambia el estado del componete mediante el imput.
   */
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  /**
   * 
   * @returns Esta funcion aniade una nueva tarea en la lista de tareras.
   */

  const handleAddTAsk = () => {
    setTask([...task, newTask]);
    setNewTask('');
  };

  /**
  * @returns Cambia el modo de vista de light -> dark y viceversa.
  */

  return (
    <div className={`App ${mode ? 'dark' : 'light'}`}>
      {props.greeting}
      <button className='toggle-dark' onClick={() => setMode(!mode)}>Change mode light | dark</button>
      <h2>------------ Task List ---------------</h2>
      <div>
        <input id='input-task' type="text" name="task-input" value={newTask} onChange={handleInputChange} />
        <btton className='toggle-dark' onClick={handleAddTAsk}>Add new task</btton>
      </div>
      <ul>
        {!task.length ? <h3>La lista de tareas esta vacia</h3> : (
          task.map((t, i) => <li key={i}>{t}</li>)
        )}
      </ul>
    </div>
  );
}

export default App;
