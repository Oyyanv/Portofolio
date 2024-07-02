import React from 'react'
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about">
        <div className="md:grid md:grid-cols-2 gap-12 items-center py-8 px-8 xl:gap-12 text-justify sm:py-8 xl:px-[25%] lg:px-48 bg-[#14274E] rounded-lg">
            <img src="/images/cosplayer.jpg" width={250} height={250} className='rounded-full w-48 h-72 lg:m-14 md:m-16'/>
            <div className=''>
                <h2 className="font-Questrial text-[#F1F6F9] lg:text-4xl text-4xl underline font-semibold">
                    About
                </h2>
                <p className='font-Questrial text-[#F4F4F2] lg:text-lg'>
                Hi!, I'm Muhammad Royyan, you can call me Oyyan, I'm 17 years old, I'm a student at SMK TELKOM BANJARBARU. 
                My hobbies are coding, watching anime, films, playing games and I like Vestia Zeta from HololiveID gen 3
                </p>
            </div>
        </div>
    </section>
  )
}

export default AboutSection;