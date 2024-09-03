"use client";
import React, {useEffect} from "react";
// import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import 'aos/dist/aos.css';

const HomeSection = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <section>
            <div data-aos="fade-right" data-aos-duration="1000">
            <p className="font-Questrial text-[#F6F6F6] lg:text-lg  font-thin">Hi, I&apos;m</p>
            </div>
            <div data-aos="fade-left" data-aos-duration="1000">
            <h1 className="text-6xl lg:text-9xl font-Questrial font-extrabold text-[#F6F6F6]">Oyyan👋</h1>
            <p className="font-Questrial text-5xl font-semibold text-[#F6F6F6]">Web Developer</p>
            </div>
        </section>
    )
}

export default HomeSection;