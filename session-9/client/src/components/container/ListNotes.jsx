import React, { useState } from "react";
import Notes from "../pure/Notes";
import AddNote from "../pure/AddNote";

const ListNotes = () => {

  const [notes, setNotes] = useState(["Hacer la compra"]);
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
