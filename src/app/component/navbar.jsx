"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center bg-[#393E46] lg:w-[40%] sm:w-[85%] w-[80%] md:w-[55%] xl:w-[35%]
      fixed top-5 left-1/2 translate-x-[-50%] rounded-full p-2 h-10 z-50">
        <ul className="flex md:space-x-1 sm:space-x-10 sm:gap-11 space-x-5 text-xs sm:text-md 
        translate-x-[-50%] sm:translate-x-[-50%] fixed left-1/2 text-[#afafaf] font-Comfortaa xl:text-base font-extrabold">
         <Link href="#home" className="hover:text-[#F1F6F9]">
            <li>
               Home
            </li>
         </Link>
         <Link href="#about" className="hover:text-[#F1F6F9]">
            <li>
               About
            </li>
         </Link>
         <Link href="#Skill" className="hover:text-[#F1F6F9]">
            <li>
               Skill
            </li>
         </Link>
         <Link href="#Project" className="hover:text-[#F1F6F9]">
            <li>
               Project
            </li>
         </Link>
         <Link href="#contact" className="hover:text-[#F1F6F9]">
            <li>
               Contact
            </li>
         </Link>
        </ul>
      </nav>
    )
}

export default Navbar;