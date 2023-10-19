import logo from './logo.svg';
import './App.css';
import ListNotes from './components/container/ListNotes';
import AddNote from './components/pure/AddNote';
function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a la sesion 11</h1>
      <h3>Esto va a ser una aplicacion de notas para darle cania a React JS</h3>
      <ListNotes />
    </div>
  );
}

export default App;
