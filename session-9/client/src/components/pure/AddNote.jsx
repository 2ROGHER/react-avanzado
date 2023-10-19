import React, { useState } from "react";

const AddNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  return (
    <div className="input-new-note">
      <input
        type="text"
        value={newNote}
        name="newNote"
        placeholder="add new note"
        onChange={(e) => setNewNote(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && addNote(newNote) && setNewNote('');
        }}
      />
      <button
        onClick={() => {
          addNote(newNote);
          setNewNote("");
        }}
      >
        Add note
      </button>
    </div>
  );
};

export default AddNote;
