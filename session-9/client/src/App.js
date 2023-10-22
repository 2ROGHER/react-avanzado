import logo from './logo.svg';
import './App.css';
import axios from 'axiosd';
import ListNotes from './components/container/ListNotes';
import AddNote from './components/pure/AddNote';
import { useState } from 'react';


function App() {
  const [busqueda, setBusqueda] = useState('');
  const [listado, setListado] = useState(listado);

  const handleBusqueda = () => {
    console.log('buscando');
    const url = `https://fr1.api.radio-browser.info/json/stations/byname/${busqueda}`;
    axios.get(url)
      .then(r => setListado(r.data))
      .catch(e => console.log(e));
  };
  return (
    <div className="App">
      {/* Estos son para el testeo leccion 9-10-11

       <h1>Bienvenidos a la sesion 11</h1>
      <h3>Esto va a ser una aplicacion de notas para darle cania a React JS</h3>
      <ListNotes /> */}

      <h1>Bienvenidos a la aplicacion de <span>OpenRadioCamp</span></h1>
      <div>
        <input
          value={busqueda}
          type='text'
          placeholder='Escribe el nombre de la radio'
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleBusqueda}>Buscar</button>
      </div>
      <section aria-label='listado-emisoras'>
        <ul>
          {
            listado.length > 0 && <div aria-label='lenght-not-null'></div>
          }
          {
            listado.map((l, i) => <li key={i}>{l.name}</li>)
          }
        </ul>
      </section>
    </div>
  );
}

export default App;
