import logo from './logo.svg';
import './App.css';
import { app, messaging } from './firebase/index.js';
import Header from './components/Header';
import { useState, useContext, createContext } from 'react';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Shopping from './routes/Shopping';
import { Toaster, toast } from 'react-hot-toast';
// import { app } from './firebase';
import { onMessage } from 'firebase/messaging';
import Footer from './components/Footer';
import TaskList from './components/TaskList';

// <React.fragment></React.fragment>  <. > (<> </>)

export const AppContext = createContext(null);

onMessage(messaging, (payload) => {
  console.log("Nueva notificacion el directo", payload);
  toast(payload.notification.body);
  alert(payload.notification.body);
  toast.custom(t => (
    <div className='bg-sky-500 p-5 shadow-lg'>
      <p className='text-lg text-sky-800'>{payload.notification.body}</p>
      <p className='text-sm text-sky-700'>{payload.notification.title}</p>

    </div>
  ))
});

function App() {
  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{ route, setRoute, user, setUser }}>
      <div className="App">
        <div className='h-screen'>
          <Header />
          <main className='px-6 py-24'>
            {route === 'home' &&
              <Home />
            }
            {
              route === 'login' &&
              <Login />
            }
            {
              route === 'register' &&
              <Register />
            }
            {
              route === 'shopping' &&
              <Shopping />
            }
            {
              route === 'tasks' &&
              <TaskList />
            }

            {user && <p>Usuario logeado: {user.email}</p>}

          </main>

        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
