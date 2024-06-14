import React from "react";
import { Navbar } from "../../components/navbar";

import {ReactComponent as ShapesImage} from "../../assets/images/design/shapes.svg"

export const DesignStyle = () => {
  return (
    <div  >
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          <h2 className="text-2xl mb-10"><s>design</s><span className="ml-5"><s></s>tyle</span></h2>
          <div className="w-full  mb-20 flex flex-col md:flex-row md:mt-20">
            <p className=" font-thin mb-4 order-2 ">Currently most of my designs follow a minimalist and flat design focusing on simplicity, clean lines, and a limited color palette avoiding gradients and shadows.</p>
            <ShapesImage className="mb-10 md:mb-0 md:mr-20 md:w-1/3" />
          </div>
        </div>
      </main>
    </div>
  );
};
