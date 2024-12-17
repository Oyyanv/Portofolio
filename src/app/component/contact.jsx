import React from "react";
import Image from "next/image";
export const ContactSection = () =>{
    return(
        <section id="contact" > 
            <div className="md:mb-10 mb-10 text-4xl text-[#F9F9F9] font-Questrial underline font-semibold justify-center flex" data-aos="fade-up"
            data-aos-duration="2000">
            CONTACT
      </div>
      <div className="bg-white justify-between flex gap-10 items-center p-5 px-10 rounded-3xl overflow-x-hidden overflow-y-hidden">
      <div>
          <Image 
            src="/images/githublogo.png" 
            width={80} 
            height={8} 
            alt="HTML"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <p className="mt-2 text-sm font-Questrial flex justify-center">
            Oyyanv
          </p>
        </div>
      <div>
          <Image 
            src="/images/ig.png" 
            width={80} 
            height={8} 
            alt="HTML"
            data-aos="fade-up"
            data-aos-duration="2000"
          />
          <p className="mt-2 text-sm font-Questrial flex justify-center">
            oyyn._
          </p>
        </div>
      <div>
          <Image 
            src="/images/email.png" 
            width={80} 
            height={8} 
            alt="HTML"
            data-aos="fade-up"
            data-aos-duration="2000"
            className="ml-6"
          />
          <p className="mt-2 text-sm font-Questrial flex justify-center">
            oyyan527@gmail.com
          </p>
        </div>
      </div>
        </section>
    )
}
export default ContactSection;