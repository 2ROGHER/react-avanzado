import React, { useContext, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import toast from 'react-hot-toast';
import { AppContext } from "../App";
const auth = getAuth();

const Register = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setRoute, setUser } =  useContext(AppContext);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, pwd)
      .then((res) => {
        const user = res.user;
        setUser(user);
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
    setEmail("");
    setPwd("");
    toast(`usuario ${email} registrado  correctamente`);
    setRoute('home');

  };
  return (
    <div className=" flex flex-col gap-4 items-center home">
      <h1 className="text-sky-700 font-semibold text-center">
        Bienvenidos a register
      </h1>
      <h2>Para ser parte de este mundo, presiona registrar para unirte</h2>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-sm">
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
