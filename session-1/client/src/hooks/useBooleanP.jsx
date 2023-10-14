import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

// useBooleanHook se pueden inyectar o este comportamiento del hook se puede
// inyectar diractemente atraes de este hook

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = useRef({
    toggle: () => setValue((oldValue) => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false),
  });

  return [value, updateValue.current];
};
const UseBoolean = ({ text }) => {
  const [list, setList] = useState([]);

  // uso de useBoolean Hook

  const [loading, setLoading] = useBoolean(false);
  const [error, setError] = useBoolean(false);

  //Al inicial el componente, cargamos la lista
  useEffect(() => {
    setLoading.on();
    fetch("https://reqres.in/users")
      .then((response) => response.json())
      .then((value) => setList(value))
      .catch((error) => {
        console.log(error);
        setError.on(); // error = true
      })
      .finally(() => setLoading.off());
  }, [list, setLoading, setError]);

  return (
    <div>
      <p>{loading ? "Loading..." : "null"}</p>
      <p>{error ? "Something went wrong" : null}</p>
    </div>
  );
};

UseBoolean.propTypes = {
  text: PropTypes.string.isRequired,
};

export default UseBoolean;
