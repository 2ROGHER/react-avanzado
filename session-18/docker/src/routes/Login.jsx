import React, { useState, useContext} from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { AppContext } from "../App";
const provider = new GoogleAuthProvider();
const auth = getAuth();

const Login = () => {

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setRoute, setUser } = useContext(AppContext);

  const loginGoogle = () => {
    //TODO: esto no funciona revisar la documentacion
    signInWithPopup(auth, provider)
      .then((res) => {
        const credential = GoogleAuthProvider.credentialFromResult(res);
        const token = credential.accessToken;
        const user = res.user;
        console.log("token: ", token);
        console.log("user:", user);
        setUser(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        const email = err.email;
        const credential = GoogleAuthProvider.credentialFromResult(err);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const loginWithEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        const user = res.user;
      })
      .catch((err) => {
        console.log(err.messge, err.code);
      })
  };
  const loginEmail = (e) => {
    e.preventDefault();
    loginWithEmailAndPassword();
    setEmail("");
    setPwd("");
    setRoute('home')
  };
  return (
    <div className="login">
      <h1 className="txt-xl font-semibold text-sky-700">Bienvenidos a login</h1>
      <p className="text-sm">Haz clic en el boton para logearte</p>
      <div className="flex flex-col">
        <form onSubmit={loginEmail} className="flex flex-col gap-2 max-w-sm">
          <input
            className="border border-gray-500 rounded py-1 px-2 outline-none"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <input
            className="border border-gray-500 rounded py-1 px-2 outline-none"
            type="password"
            placeholder="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <button
            className="bg-sky-400 py-1 text-white rounded shadow"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
      <button onClick={loginGoogle} className="bg-sky-500 p-2">
        google
      </button>
    </div>
  );
};

export default Login;
