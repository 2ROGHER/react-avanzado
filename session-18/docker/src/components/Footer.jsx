import React, { useContext } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { BsCart, BsList } from 'react-icons/bs';
import { AppContext } from "../App";

const Footer = () => {
    const { setRoute } = useContext(AppContext);
  return (
    <footer className="fixed h-16 w-full bg-sky-200 bottom-0 flex justify-evenly items-center">
      <div
        className="fle bg-sky-100 text-4xl p-2 rounded-full text-pink-500 cursor-pointer transition hover:bg-sky-50"
        onClick={() => setRoute("home")}
      >
        <IoHomeSharp />
      </div>

      <div
        className="fle bg-sky-100 text-4xl p-2 rounded-full text-pink-500 cursor-pointer transition hover:bg-sky-50"
        onClick={() => setRoute("shopping")}
      >
        <BsCart />
      </div>

      <div
        className="fle bg-sky-100 text-4xl p-2 rounded-full text-pink-500 cursor-pointer transition hover:bg-sky-50"
        onClick={() => setRoute("tasks")}
      >
        <BsList />
      </div>
    </footer>
  );
};

export default Footer;
