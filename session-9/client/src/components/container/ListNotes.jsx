import React, { useState } from "react";
import Notes from "../pure/Notes";
import AddNote from "../pure/AddNote";

/**
 * Componente que gestion la lista de tareas.
 * @returns {React.Component}
 */
const ListNotes = () => {

  const [notes, setNotes] = useState(["Hacer la compra", 'Hacer la cama']);

  /**
   * Funcion que agrega una nueva tarea a la lista.
   * @param {object} note 
   */
  const addNote = (note) => {
    setNotes([...notes, note]);
  };
  
  return (
    <div>
      <AddNote addNote={addNote} />
      <Notes notes={notes} />
    </div>
  );
};

export default ListNotes;
