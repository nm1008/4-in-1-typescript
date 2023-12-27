import { useState } from "react";

import { Link } from "react-router-dom";
import { FaCalculator } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinkStyle =
  "flex items-center gap-1 transition-all duration-500 hover:bg-gray-600 hover:text-white hover:text-white px-3 py-2 rounded text-md font-medium ";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((status) => !status);
  };
  return (
    <nav className="bg-gray-800">
      <div className=" px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 ">
            <a href="#" className="text-md font-medium px-3 py-2 text-white">
              4-in-1
            </a>
          </div>
          <div className="hidden md:block text-white">
            <div className="flex items-baseline space-x-4 ">
              <ul className="flex gap-2">
                <li className={navlinkStyle}>
                  <FaCalculator size={24} className="shrink-0" />
                  <Link to="/">Calculator</Link>
                </li>
                <li className={navlinkStyle}>
                  <BiTask size={24} className="shrink-0" />
                  <Link to="/todoList">Todo List</Link>
                </li>
                <li className={navlinkStyle}>
                  <CiClock2 size={24} className="shrink-0" />
                  <Link to="/clock">Clock</Link>
                </li>
                <li className={navlinkStyle}>
                  <TiWeatherPartlySunny size={24} className="shrink-0" />
                  <Link to="/weather">Weather App</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mr-2 flex items-center gap-5 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={handleMenu}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}

        {open && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul className="flex flex-col items-center">
                <div className="text-white flex flex-col gap-3">
                  <li className={navlinkStyle}>
                    <FaCalculator size={24} />
                    <Link to="/">Calculator</Link>
                  </li>
                  <li className={navlinkStyle}>
                    <BiTask size={24} />
                    <Link to="/todoList">Todo List</Link>
                  </li>
                  <li className={navlinkStyle}>
                    <CiClock2 size={24} />
                    <Link to="/clock">Clock</Link>
                  </li>
                  <li className={navlinkStyle}>
                    <TiWeatherPartlySunny size={24} />
                    <Link to="/weather">Weather App</Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
