import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../img/corsitlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-teal-200 flex justify-between items-center h-24 max-w-full mx-auto px-4 font-bold text-teal-950 ">
      <img className="w-20 mt-2 " src={logo} alt="/" />
      {/* <h1 className="w-full text-3xl font-bold text-[black]">CORSIT</h1> */}
      <ul className="hidden md:flex">
        <li className=" p-4">
          <Link to="/">Home</Link>
        </li>
        <li className=" p-4">
          <Link to="/about">About</Link>
        </li>
        <li className=" p-4 whitespace-nowrap">
          <Link to="/team">Our Team</Link>
        </li>
        <li className=" p-4">
          <Link to="/alumni">Alumni</Link>
        </li>
        <li className=" p-4 whitespace-nowrap">
          <Link to="/project">Bots & Projects</Link>
        </li>
        <li className=" p-4">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed  left-0 top-24 min-w-[60%] h-full border-r border-r-gray-900 bg-[#f51f1b] ease-in-out duration-500"
            : "ease-in-out top-24 min-h-full duration-500 fixed left-[-100%]"
        }
      >
        {/* <h1 className="w-full text-3xl font-bold text-red-300 m-4">REACT.</h1> */}
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/about">About</Link>
        </li>
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/team">Our Team</Link>
        </li>
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/alumni">Alumni</Link>
        </li>
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/project">Bots & Projects</Link>
        </li>
        <li onClick={handleNav} className=" p-4 border-b border-gray-600">
          <Link to="/contact">Contact</Link>
        </li>
        {/* <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className=" p-4">Contact</li> */}
      </ul>
    </div>
  );
};

export default Navbar;
