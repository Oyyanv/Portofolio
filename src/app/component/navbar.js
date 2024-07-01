import React from "react";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center bg-[#394867] lg:w-[50%] sm:w-[65%] w-[70%]
      fixed top-5 left-1/2 translate-x-[-50%] rounded-full p-2 h-10">
        <ul className="flex md:space-x-12 sm:space-x-10 sm:gap-11 space-x-5 text-xs sm:text-md 
        translate-x-[-50%] sm:translate-x-[-50%] fixed left-1/2">
        <a href="/">
           <li className="">
            Home
           </li>
        </a>
        <a href="/">
           <li className="">
            About
           </li>
         </a>
        <a href="/">
           <li className="">
            Project
           </li>
        </a>
        <a href="/">
           <li className="">
            Contact
           </li>
        </a>
        </ul>
      </nav>
    )
}

export default Navbar;