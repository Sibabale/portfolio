import React from "react";
import {Link} from "react-router-dom";

import { Navbar } from "../../components/navbar";
import FigmaImage from "../../assets/images/design/figma.png"

export const DesignTools = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="py-60 px-20">
          
          <div  className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s>design</s><span className="ml-5">tools</span></h2>
              <p className="list-disc text-white font-thin mb-4">i use figma because it provides a collaborative, cloud-based platform that enables seamless design work, prototyping, and sharing with team members in real-time.</p>
          </div>

          <div className="flex justify-between mb-40">
            <Link to="" className="flex flex-col items-center">
              <img src={FigmaImage} alt="The logo for figma." />
              <span className="text-white font-thin mt-10">figma</span>
            </Link>
            <div className="flex flex-col items-center">
            </div>
            <div className="flex flex-col items-center">
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
