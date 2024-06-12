import React from "react";
import { Navbar } from "../../components/navbar";

import PhoneImage from "../../assets/images/design/phone.png"
import MotionImage from "../../assets/images/design/bouncing-ball.png"
import IdeationImage from "../../assets/images/design/light-bulb.png"
import WireframeImage from "../../assets/images/design/wireframe.png"
import InterfacesImage from "../../assets/images/design/interfaces.png"
import MagnifyingGlassImage from "../../assets/images/design/magnifying-glass.png"

export const DesignProcess = () => {
  return (
    <div className="bg-black">
    <Navbar />

      <main>
        <div className="p-10 lg:p-20 lg:py-60 lg:px-20">
          
          <div className="w-full lg:w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-28 lg:mb-10"><s>design</s><span className="ml-5">process</span></h2>
            <ul>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <img src={IdeationImage} alt="A light bulb." className="w-10" />
                  <span className="text-white font-thin ml-5">Ideation</span>
                </div>
                <p>I first think and brainstorm the idea by building full case study with problem statements and personas.</p>
              </li>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <img src={MagnifyingGlassImage} alt="A magnifying glass" className="w-10" />
                  <span className="text-white font-thin ml-5">Research</span>
                </div>
                <p>Research is key to validating assumptions and building a solid foundation for a project</p>
              </li>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <img src={WireframeImage} alt="A wireframe design" className="w-10" />
                    <span className="text-white font-thin ml-5">Wireframes</span>
                  </div>
                  <p>Hand drawn wireframes are the best way to let my creativity and think process flow freely without the restriction of design tools.</p>
              </li>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <img src={PhoneImage} alt="A wireframe design" className="w-10" />
                    <span className="text-white font-thin ml-5">Mockups</span>
                  </div>
                  <p>Tools like figma then allow me to conceptualize the idea into a product.</p>
              </li>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <img src={MotionImage} alt="A bouncing ball" className="w-20" />
                    <span className="text-white font-thin ml-5">Motion</span>
                  </div>
                  <p>Motion design brings feelings and life into a applications that are often 2 dimensional and lifeless.</p>
              </li>
              <li className="lg:list-disc text-white font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <img src={InterfacesImage} alt="A computer and a phone" className="w-20" />
                    <span className="text-white font-thin ml-5">Prototyping</span>
                  </div>
                  <p>Lastly i prototype and test my applications.</p>
              </li>
            </ul>
            <p className="text-white font-thin mt-10"><i><b className="mr-4"><u>NB</u></b>Depending on a project I follow this is my process chronologically and sometimes I omit some steps.</i></p>
          </div>

        <div className="hidden lg:flex justify-between mb-40">
          <div className="flex flex-col items-center">
            <img src={IdeationImage} alt="A light bulb." />
            <span className="text-white font-thin mt-10">ideation</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={MagnifyingGlassImage} alt="A magnifying glass" />
            <span className="text-white font-thin mt-10">research</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={WireframeImage} alt="A wireframe design" />
            <span className="text-white font-thin mt-10">wireframing</span>
          </div>
        </div>
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col items-center justify-end">
            <img src={PhoneImage} alt="A wireframe design" />
            <span className="text-white font-thin mt-10">mockups</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <img src={MotionImage} alt="A bouncing ball" />
            <span className="text-white font-thin mt-10">animation</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <img src={InterfacesImage} alt="A threaded needle" />
            <span className="text-white font-thin mt-10">prototyping</span>
          </div>
          

        </div>

        </div>
      </main>
    </div>
  );
};
