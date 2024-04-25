import React from "react";
import { Navbar } from "../../components/navbar";
import WhyDevelopImage from "../../assets/images/development/why-dev.png"

export const WhyDevelop = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="py-60 px-20">
          
          <div className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><span className="mr-5">why?</span><s>development</s></h2>
            <p className="text-white font-thin mb-4">growing up my dad was a mine worker who later became a security guard and my mother was a housewife, that mean’t we didn’t get legos or barbie dolls on our birthdays or on Christmas.</p>
            <p className="text-white font-thin mb-4">our toys were made of clay from river banks & leftover cinder blocks. we hunted wild rats and birds for fun we had to be creative with what we had, now in retrospect this is where my problem solving skills came from.</p>
            <p className="text-white font-thin mb-4">being born in post-apartheid South Africa with its inherent socio-economic problems meant that i saw and still see a lot of opportunities to solve pressing issues especially for people living in townships & rural areas.</p>
          </div>

          <img src={WhyDevelopImage} alt="A village hut and a family of 3 with the sun on the background" />

        </div>
      </main>
    </div>
  );
};
