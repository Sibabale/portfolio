import React from "react";
import { Navbar } from "../../components/navbar";

import {ReactComponent as ShapesImage} from "../../assets/images/design/shapes.svg"

export const DesignStyle = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          <h2 className="text-2xl mb-10"><span className="auto-strike">design</span><span className="ml-5"><s></s>style</span></h2>
          <div className="w-full  mb-20 flex flex-col md:flex-row md:mt-20">
            <p className="md:w-1/2 font-thin mb-4 order-2 ">Currently most of my designs follow a minimalist and flat design focusing on simplicity, clean lines, and a limited color palette. Depending on the project I always try to map the personality of the brand or person behind the project.</p>
            <ShapesImage className="mb-10 md:mb-0 md:mr-20 md:w-1/3" />
          </div>
        </div>
      </main>
    </div>
  );
};
