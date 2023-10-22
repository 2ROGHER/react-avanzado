import React, { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="shopping">
      <h1>Bienvenidos a la tienda online de  Fire-shopping ❤️‍🔥</h1>
      {user && <p>Usuario logeado: {user.emal}</p>}
    </div>
  );
};

export default Home;
