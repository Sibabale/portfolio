import React from "react";
import { Navbar } from "../../components/navbar";

import ShapesImage from "../../assets/images/design/shapes.png"

export const DesignStyle = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          <h2 className="text-white mb-10"><s>Design</s><span className="ml-5">Style</span></h2>
          <div className="w-full  mb-20 flex flex-col md:flex-row md:mt-20">
            <p className="text-white font-thin mb-4 order-2 ">Currently most of my designs follow a minimalist and flat design focusing on simplicity, clean lines, and a limited color palette avoiding gradients and shadows.</p>
            <img src={ShapesImage} alt="A triangle and a circle" className="mb-10 md:mb-0 md:mr-20 md:w-1/3" />
          </div>
        </div>
      </main>
    </div>
  );
};
