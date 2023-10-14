import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

// useBooleanHook se pueden inyectar o este comportamiento del hook se puede 
// inyectar diractemente atraes de este hook

const useBoolean = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const updateValue = useRef(
        {
            toggle: () => setValue(oldValue => !oldValue),
            on: () => setValue(true),
            off: () => setValue(false)
        }
    )
    return [value, updateValue.current]
};
const UseBoolean = ({ text }) => {
  //const [show, setShow] = useState(false);
  const [show, setShow] = useBoolean(false);

  const showText = () => {
    setShow(!show);
  };


  return (
    <div>
      <button onClick={showText}>{show ? "Hidden" : "Show"}</button>
      {show && (
        <div>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
};

UseBoolean.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UseBoolean;
