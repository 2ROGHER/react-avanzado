import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SiFirebase } from "react-icons/si";
import { AppContext } from "../App";
import { GoogleAuthProvider, getAuth, signOut } from "firebase/auth";
const auth = getAuth();

const Header = () => {
  const { route, setRoute } = useContext(AppContext);
  const { user, setUser } = useContext(AppContext);
  const logout = () => {
    signOut(auth)
      .then(() => {
        setRoute("login");
        setUser(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <header className="h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between fixed">
      <div
        onClick={() => setRoute("home")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <SiFirebase className="text-2xl text-pink-600" />
        <span className="text-x1 font-semibold text-pink-600">FireShoping</span>
      </div>

      <div className="flex gap-2">
        {!user ? (
          <>
            <button
              onClick={() => setRoute("login")}
              className="bg-sky-500 text-white py-1 px-3 rounded-md hover:bg-sky-700 transition"
            >
              Login
            </button>{" "}
          </>
        ) : (
          <button
            onClick={() => setRoute("login")}
            className="bg-sky-500 text-white py-1 px-3 rounded-md hover:bg-sky-700 transition"
          >
            logout
          </button>
        )}

        <button
          onClick={() => setRoute("register")}
          className="bg-sky-500 text-white py-1 px-3 rounded-md hover:bg-sky-700 transition"
        >
          Register
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {};

export default Header;
