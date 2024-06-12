import React from "react";
import {Link} from "react-router-dom";

import { Navbar } from "../../components/navbar";
import FigmaImage from "../../assets/images/design/figma.png"

export const DesignTools = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          
          <h2 className="text-white mb-10"><s>design</s><span className="ml-5">tools</span></h2>
          <div  className="w-full mb-20 flex flex-col md:flex-row md:items-center lg:items-start">
            <p className="list-disc text-white font-thin mb-4 order-2 lg:order-1 lg:w-1/2">I use Figma because it provides a collaborative, cloud-based platform that enables seamless design work, prototyping, and sharing with team members in real-time.</p>
          
            <div className="flex justify-between my-20 lg:my-0   md:mr-20">
              <Link to="" className="flex flex-col items-center">
                <img src={FigmaImage} alt="The logo for figma." />
              </Link>
              <div className="flex flex-col items-center">
              </div>
              <div className="flex flex-col items-center">
              </div>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
};
