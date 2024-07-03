import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen justify-center flex items-center">
      <div className="grid md:grid-cols-2 gap-4 items-center relative z-10">
        <div className="flex justify-center">
          <img 
            src="/images/bg.png" 
            width={250} 
            height={250} 
            className="rounded-full lg:w-[45%] w-48 lg:h-96 h-72 mb-1 ml-2 bg-[#F1F6F9]"
            alt="Profile Image"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#c9c9c9] px-10 py-10 rounded-lg blur-xl"></div>
          <div className="relative bg-[#45474B] h-fit px-6 rounded-lg py-5 pb-8">
            <h2 className="font-Questrial text-[#F1F6F9] lg:text-4xl text-4xl underline font-semibold mb-4">
              About
            </h2>
            <p className="font-Questrial text-[#F4F4F2] lg:text-lg lg:text-justify">
              Hi!, I'm Muhammad Royyan, you can call me Oyyan, I'm 17 years old, I'm a student at SMK TELKOM BANJARBARU. 
              My hobbies are coding, watching anime, films, playing games and I like Vestia Zeta from HololiveID gen 3.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
