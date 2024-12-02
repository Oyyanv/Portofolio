import React from 'react';
import Image from 'next/image';

export const SkillSection = () => {
  return (
    <section id="Skill" className="relative min-h-screen flex flex-col xl:items-center xl:justify-center md:items-center md:justify-center items-start justify-center">
      {/* Teks Header */}
      <div className="md:mb-10 mb-3 text-4xl text-[#F9F9F9] font-Questrial underline font-semibold">
        SKILL
      </div>
      
      {/* Grid untuk logo */}
      <div className="grid bg-[#F9F9F9] md:grid-cols-11 md:gap-12 grid-cols-3 gap-5 items-center px-7 pt-8 pb-2 rounded-md text-center">
        {/* Logo HTML */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/htmllogo.png" 
            width={80} 
            height={80} 
            alt="HTML"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            HTML
          </p>
        </div>

        {/* Logo CSS */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/csslogo.png" 
            width={80} 
            height={80} 
            alt="CSS" 
            data-aos="fade-up"
            data-aos-duration="1900"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            CSS
          </p>
        </div>

        {/* Logo JavaScript */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/jslogo.png" 
            width={80} 
            height={80} 
            alt="JavaScript" 
            data-aos="fade-up"
            data-aos-duration="1800"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            JavaScript
          </p>
        </div>

        {/* Logo Tailwind */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/tailwindlogo.png" 
            width={80} 
            height={80} 
            alt="Tailwind" 
            data-aos="fade-up"
            data-aos-duration="1700"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Tailwind
          </p>
        </div>

        {/* Logo React */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/reactlogo.png" 
            width={80} 
            height={80} 
            alt="React" 
            data-aos="fade-up"
            data-aos-duration="1600"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            React
          </p>
        </div>

        {/* Logo PHP */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/phplogo.png" 
            width={80} 
            height={80} 
            alt="PHP" 
            data-aos="fade-up"
            data-aos-duration="1500"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            PHP
          </p>
        </div>

        {/* Logo Laravel */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/laravellogo.png" 
            width={80} 
            height={80} 
            alt="Laravel" 
            data-aos="fade-up"
            data-aos-duration="1400"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Laravel
          </p>
        </div>

        {/* Logo Dart */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/dartlogo.png" 
            width={80} 
            height={80} 
            alt="Dart" 
            data-aos="fade-up"
            data-aos-duration="1300"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Dart
          </p>
        </div>

        {/* Logo Flutter */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/flutterlogo.png" 
            width={80} 
            height={80} 
            alt="Flutter" 
            data-aos="fade-up"
            data-aos-duration="1200"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Flutter
          </p>
        </div>

        {/* Logo Git */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/gitlogo.png" 
            width={80} 
            height={80} 
            alt="Git" 
            data-aos="fade-up"
            data-aos-duration="1100"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Git
          </p>
        </div>

        {/* Logo GitHub */}
        <div className="group transform hover:scale-110 transition-transform duration-300">
          <Image 
            src="/images/githublogo.png" 
            width={80} 
            height={80} 
            alt="GitHub" 
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <p className="mt-2 text-sm font-Questrial opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
          </p>
        </div>

      </div>
    </section>
  );
}

export default SkillSection;
