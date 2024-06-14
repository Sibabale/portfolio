import React from "react";
import { Navbar } from "../../components/navbar";
import WhyDevelopImage from "../../assets/images/development/why-dev.png"

export const WhyDevelop = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          
            <h2 className="text-white mb-10"><span className="mr-5"><s>development</s></span>why?</h2>
          <div className="w-full mb-20 flex flex-col md:flex-row md:pt-20 md:items-start lg:items-center">
            <div className="order-2 md:order-1">
              <p className="text-white font-thin mb-4">Growing up my dad was a mine worker who later became a security guard and my mother was a housewife, that mean’t we didn’t get legos or barbie dolls on our birthdays or on Christmas.</p>
              <p className="text-white font-thin mb-4">Our toys were made of clay from river banks & leftover cinder blocks. we hunted wild rats and birds for fun we had to be creative with what we had, now in retrospect this is where my problem solving skills came from.</p>
              <p className="text-white font-thin mb-4">Being born in post-apartheid South Africa with its inherent socio-economic problems meant that i saw and still see a lot of opportunities to solve pressing issues especially for people living in townships & rural areas.</p>
            </div>
            <img src={WhyDevelopImage} alt="A village hut and a family of 3 with the sun on the background" className="mb-10 md:mb-0 md:mr-20 md:w-1/3 object-contain" />
          </div>


        </div>
      </main>
    </div>
  );
};
