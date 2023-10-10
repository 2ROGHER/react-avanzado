import React, { memo, useCallback, useMemo } from "react";

// React.useCallback //este es en el componete de clase.

const MiComponente = (props) => {
  const [name, setName] = useState(initialState);

  const names = ["Fiorela", "Roger"];

  const getName = useCallback(() => {
    // Hacer algo
    const random = Math.floor(Math.random() * names.length - 1);
    setName(names[random]);
  }, [props.name]);

  const clearName = useCallback(() => {
    // el vacio del array de dependencias me dice que memoriza para cualquiera.
    setName("");
  }, []);

  return (
    <div>
      <h1>Mi MiComponente</h1>
    </div>
  );
};
const memorization = useMemo(() => componenteOrValue(a, b), [a, b]);

export default function EjemploHooks() {
  return <div></div>;
}
