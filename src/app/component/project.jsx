import React from "react";
import Image from 'next/image';

export const ProjectSection = () => {
    return(
        <section id="Project" className="xl:overflow-x-hidden relative min-h-screen flex flex-col xl:items-center xl:justify-center md:items-center md:justify-center justify-center">
            <div className="md:mb-10 mb-3 text-4xl text-[#F9F9F9] font-Questrial underline font-semibold justify-center flex" data-aos="fade-up"
            data-aos-duration="2000">
        MY PROJECTS
      </div>
      <div className="flex xl:justify-center xl:overflow-x-hidden">
  <div className="flex flex-nowrap justify-start overflow-y-hidden  xl:justify-center xl:flex gap-6 p-10 xl:min-w-screen w-screen overflow-scroll xl:overflow-x-auto">
    {/* Card Component 1 */}
    <div className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-52 xl:w-52" data-aos="fade-up"
            data-aos-duration="1900">
      <div className="relative h-18 xl:h-28 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="images/welkessa.png"
          alt="Kessaku"
          height={300}
          width={300}
        />
      </div>
      <div className="p-6">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Kessaku Project
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Ecommerce Website
        </p>
      </div>
      <div className="p-6 pt-5">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          No Link
        </button>
      </div>
    </div>
    {/* Card Component 2 */}
    <div className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-52 xl:w-52" data-aos="fade-up"
            data-aos-duration="1800">
      <div className="relative h-18 xl:h-28 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img width={250} height={400}
          src="/images/knowledge.png"
          alt="Knowledge"
        />
      </div>
      <div className="p-5">
        <h5 className="block font-sans text-lg antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Knowledge App
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Education App Flutter
        </p>
      </div>
      <div className="p-6 pt-8">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          No Link
        </button>
      </div>
    </div>
    {/* Card Component 1 */}
    <div className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-52 xl:w-52" data-aos="fade-up"
            data-aos-duration="1700">
      <div className="relative h-18 xl:h-28 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="images/infokus.png"
          alt="infokus"
        />
      </div>
      <div className="p-6">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          INFOKUS
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          SPP Payment
        </p>
      </div>
      <div className="p-6 xl:pt-5 pt-12">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
        No Link
        </button>
      </div>
    </div>
    {/* Card Component 1 */}
    <div className="relative flex flex-col mt-12 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-52 xl:w-52" data-aos="fade-up"
            data-aos-duration="1600">
      <div className="relative h-18 xl:h-28 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          src="https://pky-profile.vercel.app/images/geografi.jpg"
          alt="Profile PKY"
        />
      </div>
      <div className="p-6">
        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          PKY Profile
        </h5>
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
          Semantic Web
        </p>
      </div>
      <div className="p-6 xl:pt-5 pt-8">
        <a href="https://pky-profile.vercel.app/" target="_blank" rel="noopener noreferrer">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Link
        </button>
        </a>
      </div>
    </div>
  </div>
</div>
        </section>
    )
}
export default ProjectSection;