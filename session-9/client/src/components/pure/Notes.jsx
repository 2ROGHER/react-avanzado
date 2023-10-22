import React from "react";
import PropTypes from "prop-types";

const Notes = ({ notes = [] }) => {
  return (
    <ul className="list-notes" aria-label="list-notes">
      {notes.map((n, i) => (
        <li key={i}>{n}</li>
      ))}
    </ul>
  );
};

Notes.propTypes = {
    notes: PropTypes.array.isRequired,
};

export default Notes;
