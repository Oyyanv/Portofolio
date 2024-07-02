import React from "react";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center bg-[#393E46] lg:w-[40%] sm:w-[85%] w-[80%] md:w-[55%] xl:w-[35%]
      fixed top-5 left-1/2 translate-x-[-50%] rounded-full p-2 h-10">
        <ul className="flex md:space-x-1 sm:space-x-10 sm:gap-11 space-x-5 text-xs sm:text-md 
        translate-x-[-50%] sm:translate-x-[-50%] fixed left-1/2 text-[#afafaf] font-Comfortaa xl:text-base font-extrabold">
        <a href="/">
           <li className="hover:text-[#F7F7F7]">
            Home
           </li>
        </a>
        <a href="/">
           <li className="hover:text-[#F7F7F7]">
            About
           </li>
         </a>
        <a href="/">
           <li className="hover:text-[#F7F7F7]">
            Skill
           </li>
         </a>
        <a href="/">
           <li className="hover:text-[#F7F7F7]">
            Project
           </li>
        </a>
        <a href="/">
           <li className="hover:text-[#F7F7F7]">
            Contact
           </li>
        </a>
        </ul>
      </nav>
    )
}

export default Navbar;