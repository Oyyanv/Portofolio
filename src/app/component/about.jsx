import React from 'react';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen justify-center flex items-center">
      <div className="grid md:grid-cols-2 items-center relative z-10">
        <div className="flex justify-center">
          <Image 
            src="/images/bg.png" 
            width={375} 
            height={665} 
            className="h-[80%] w-[70%] mb-12 xl:h-[60%] xl:w-[45%] xl:ml-10 ganteng"
            alt="Profile Image"
            data-aos="flip-right"
            data-aos-duration="1000"
          />
            {/* <div className="absolute bottom-0 left-20 right-0 h-16 bg-gradient-to-t from-[#212121] via-transparent to-transparent backdrop-blur-sm z-0"></div> */}
        </div>
        <div className="relative overflow-x-hidden">
          <h2 className="font-Questrial text-[#F1F6F9] lg:text-4xl text-4xl underline font-semibold mb-4" data-aos="fade-left" data-aos-duration="850">
            ABOUT
          </h2>
          <p className="font-Questrial text-[#F4F4F2] lg:text-lg lg:text-justify" data-aos="fade-left" data-aos-duration="1500">
            Hi!, I&apos;m Muhammad Royyan, you can call me Oyyan, I&apos;m 17 years old, I&apos;m a student at SMK TELKOM BANJARBARU. 
            My hobbies are coding, watching anime, films, playing games and I like Vestia Zeta from HololiveID gen 3.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;