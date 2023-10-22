import React from "react";

// Laas interfaces se usan como los `typeprops` de Reactjs
interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps):JSX.Element {
  return (
    <div>
      <h1>{name}</h1>
      <button>Login</button>
    </div>
  );
}
