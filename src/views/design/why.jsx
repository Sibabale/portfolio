import React from "react";
import { Navbar } from "../../components/navbar";
import CatImage from "../../assets/images/design/cat.png"

export const WhyDesign = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20 ">
          
            <h2 className="text-white mb-10"><s>Design</s><span className="ml-5">Why?</span></h2>
          <div className="w-full  mb-20 flex flex-col md:flex-row md:mt-20">
            <p className="text-white font-thin mb-4 order-2 ">At one point in my life i wanted to be an animator, i loved drawing cartoons</p>
            <img src={CatImage} alt="A drawing of a cat" className="mb-10 md:mb-0 md:mr-20" />
          </div>

        </div>
      </main>
    </div>
  );
};
