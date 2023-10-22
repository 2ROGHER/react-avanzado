import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Title from "./components/Title";
import ProductList from "./components/ProductList";

const title = 'Benvenido a mi aplicacion de shopping cart con React JS Y TS';

function App():JSX.Element {
  return (
    <div className="App">
      <Header name="roger" />
      <Title title={title}/>
      <ProductList />
    </div>
  );
}

export default App;
