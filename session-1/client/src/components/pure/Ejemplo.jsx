import React, { memo } from "react";

export default function Ejemplo() {
  const names = ["John", "Roger"];

  const [name, setName] = useState("");

  const getName = () => {
    const random = Math.floor(Math.random() * (names.length - 1));
    setName(name[random]);
  };

  const clearName = () => {
    setName("");
  };

  return (
    <div>
      <h2>Ejemplo de uso de REactmemo</h2>
      <RandomNames name={name} clearName={clearName} />
      <button onClick={getName}>Get name</button>
    </div>
  );
}

export const WrappedComponent = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={props.clearName}>Clear name</button>
    </div>
  );
};

function namesAreEqual(prevProps, nextProps) {
  return prevProps.name !== nextProps.name;
}

export const RandomNames = memo(WrappedComponent, namesAreEqual);
