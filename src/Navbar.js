import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "./Images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div className="w-full bg-black h-[12vh] hidden md:flex justify-between items-center px-[88px] border-b-[1px] border-gray-700 text-gray-300">
        <img src={Logo} className="h-[90px]" alt="logo" />
        <ul className="hidden md:flex text-[18px]">
          <NavLink to="/">
            <li className="mx-[8px] hover:scale-110">Home</li>
          </NavLink>
          <NavLink to="/portfolio">
            <li className="mx-[8px] hover:scale-110">Portfolio</li>
          </NavLink>
          <NavLink to="/skills">
            <li className="mx-[8px] hover:scale-110">Skills</li>
          </NavLink>
          <NavLink to="/contact">
            <li className="mx-[8px] hover:scale-110">Contact</li>
          </NavLink>
        </ul>
      </div>

      <div className="flex bg-black flex-col border-b-[1px] border-gray-700 text-gray-300 md:hidden">
        <div className="flex items-center pl-4 my-auto h-[12vh]">
          {!nav ? (
            <AiOutlineMenu onClick={() => setNav(!nav)} size={23} />
          ) : (
            <AiOutlineClose onClick={() => setNav(!nav)} size={23} />
          )}

          <img src={Logo} className="h-[80px]" alt="logo" />
        </div>
        {nav && (
          <ul className="flex flex-col text-[18px]">
            <NavLink to="/">
              <li className="p-4 pl-6 border-b-2 border-gray-800">Home</li>
            </NavLink>
            <NavLink to="/portfolio">
              <li className="p-4 pl-6 border-b-2 border-gray-800">Portfolio</li>
            </NavLink>
            <NavLink to="/skills">
              <li className="p-4 pl-6 border-b-2 border-gray-800">Skills</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="p-4 pl-6 border-b-2 border-gray-800">Contact</li>
            </NavLink>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
