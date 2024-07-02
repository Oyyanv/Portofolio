"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
    return (
        <section>
            <p className="font-Questrial text-[#14274E] lg:text-lg  font-thin">Hi, I'm</p>
            <h1 className="text-6xl lg:text-9xl font-Questrial font-extrabold text-[#495464]">Oyyan👋</h1>
            <p className="font-Questrial text-5xl font-semibold"><span>A </span>  
            <TypeAnimation
            sequence={[
            'Web Developer',
            400,
            'Mobile Developer',
            400,
             ]}
            wrapper="span"
            speed={50}
            repeat={Infinity} />
            </p>
        </section>
    )
}

export default HomeSection;