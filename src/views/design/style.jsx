import React from "react";
import { Navbar } from "../../components/navbar";

import ShapesImage from "../../assets/images/design/shapes.png"

export const DesignStyle = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="py-60 px-20">
          
          <div  className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s className="mr-5">design</s>style?</h2>
            <p className="text-white font-thin mb-4">currently most of my designs follow a minimalist and flat design focusing on simplicity, clean lines, and a limited color palette avoiding gradients and shadows.</p>
          </div>

          <img src={ShapesImage} alt="A triangle and a circle" />

        </div>
      </main>
    </div>
  );
};
