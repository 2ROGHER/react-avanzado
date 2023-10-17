import React, { useState } from 'react';
import logo from './logo.svg';
// Este le permite al app 'App' tener acceso a unas props especiales.
import {
  withServiceWorkerUpdater
} from '@3m1/service-worker-updater'
import './App.css';

function App(props) {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;

  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, item]);
    setItem('');
  };

  return (
    <div className="App">
      <h1>*** Proyecto PWA - Lista de compras ***</h1>
      {
        newServiceWorkerDetected &&
        <div style={{ background: '#32ffd2' }}>
          <h3>!Nueva actualizacion!, ?quieres actualizar?</h3>
          <button type="button" onClick={onLoadNewServiceWorkerAccept}>Actualizar</button>
        </div>
      }
      <div>
        <input
          type="text"
          name={item}
          value={item}
          onKeyPress={e => e.key == 'Enter' && addItem()}
          onChange={(e) => { setItem(e.target.value) }}
        />
      </div>
      <div>
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {
          data.map((l, i) => {
            return <li key={i}>{l}</li>
          })
        }
      </ul>

    </div>
  );
}

export default withServiceWorkerUpdater(App);
