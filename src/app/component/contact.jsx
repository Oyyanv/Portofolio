import React from "react";
export const ContactSection = () =>{
    return(
        <section id="contact" > 
            <div className="md:mb-8 mb-8 text-4xl text-[#F9F9F9] font-Questrial underline font-semibold justify-center flex" data-aos="fade-up"
            data-aos-duration="2000">
            CONTACT
      </div>
      <div className="bg-white mt-2 justify-between flex gap-10 
      items-center p-5 px-10 rounded-3xl overflow-x-hidden overflow-y-hidden"
      data-aos="fade-left"
      data-aos-duration="1100">
      <img
          src="images/email.png"
          alt="Email"
          className="w-16 justify-center flex"
          />
          <p className="mt-2 xl:text-xl text-xs font-Questrial flex justify-center">
            oyyan527@gmail.com
          </p>        
      </div>
      <div className="bg-white mt-2 justify-between flex gap-10 items-center 
      p-5 px-10 rounded-3xl overflow-x-hidden overflow-y-hidden"
      data-aos="fade-left"
      data-aos-duration="1200">
      <img
          src="images/githublogo.png"
          alt="Github"
          className="w-16 justify-center flex"
          />
          <p className="mt-2 xl:text-xl font-Questrial flex justify-center">
            <a href="https://github.com/Oyyanv" target="_blank">Oyyanv</a>
          </p>        
      </div>
      <div className=" mt-7 text-4xl text-[#F9F9F9] font-Questrial underline font-semibold justify-center flex" data-aos="fade-up"
            data-aos-duration="2200">
            SOCIAL MEDIA
      </div>
      <div className="bg-white mt-2 justify-between flex gap-10 items-center p-5 
      px-10 rounded-3xl overflow-x-hidden overflow-y-hidden"
      data-aos="fade-left"
      data-aos-duration="1300">
      <img
          src="images/ig.png"
          alt="Instagram"
          className="w-16 justify-center flex"
          />
          <p className="mt-2 xl:text-xl font-Questrial flex justify-center">
            <a href="https://www.instagram.com/oyyn._/" target="_blank">oyyn._</a>
          </p>        
      </div>
        </section>
    )
}
export default ContactSection;