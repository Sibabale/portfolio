import React from "react";
import { Navbar } from "../../components/navbar";

import { ReactComponent as MockupsImage } from "../../assets/images/design/mockups.svg"
import { ReactComponent as MotionImage } from "../../assets/images/design/motion.svg"
import { ReactComponent as IdeationImage } from "../../assets/images/design/ideation.svg"
import { ReactComponent as WireframeImage } from "../../assets/images/design/wireframe.svg"
import { ReactComponent as InterfacesImage } from "../../assets/images/design/prototype.svg"
import { ReactComponent as ResearchImage } from "../../assets/images/design/research.svg"

export const DesignProcess = () => {
  return (
    <div className="overflow-x-hidden">
    <Navbar />

      <main>
        <div className="p-10 lg:p-20 lg:py-60 lg:px-20">
          
          <div className="w-full lg:w-6/12 mb-20 flex flex-col">
            <h2 className="text-2xl mb-28 lg:mb-10"><span className="auto-strike">design</span><span className="ml-5">process</span></h2>
            <ul>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <IdeationImage className="w-10" />
                  <span className=" font-thin ml-5">Ideation</span>
                </div>
                <p>I first think and brainstorm the idea by building a case study with problem statements and personas.</p>
              </li>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <ResearchImage className="w-10" />
                  <span className=" font-thin ml-5">Research</span>
                </div>
                <p>Research is key to validating assumptions and building a solid foundation for a project</p>
              </li>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <WireframeImage className="w-10" />
                    <span className=" font-thin ml-5">Wireframes</span>
                  </div>
                  <p>Hand drawn wireframes are the best way to let my creativity and think process flow freely without the restriction of design tools.</p>
              </li>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <MockupsImage className="w-10" />
                    <span className=" font-thin ml-5">Mockups</span>
                  </div>
                  <p>Tools like figma then allow me to conceptualize the idea into a product.</p>
              </li>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <MotionImage className="w-20" />
                    <span className=" font-thin ml-5">Motion</span>
                  </div>
                  <p>Motion design brings feelings and life into a applications that are often 2 dimensional and lifeless.</p>
              </li>
              <li className="lg:list-disc  font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <InterfacesImage className="w-20" />
                    <span className=" font-thin ml-5">Prototyping</span>
                  </div>
                  <p>Lastly i prototype and test my applications.</p>
              </li>
            </ul>
            <p className=" font-thin mt-10"><i><b className="mr-4 text-2xl"><u>NB</u></b>Depending on a project I follow this is my process chronologically and sometimes I omit some steps.</i></p>
          </div>

        <div className="hidden lg:flex justify-between mb-40">
          <div className="flex flex-col items-center">
            <IdeationImage />
            <span className=" font-thin mt-10">ideation</span>
          </div>
          <div className="flex flex-col items-center">
            <ResearchImage />
            <span className=" font-thin mt-10">research</span>
          </div>
          <div className="flex flex-col items-center">
            <WireframeImage />
            <span className=" font-thin mt-10">wireframing</span>
          </div>
        </div>
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col items-center justify-end">
            <MockupsImage />
            <span className=" font-thin mt-10">mockups</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <MotionImage />
            <span className=" font-thin mt-10">animation</span>
          </div>
          <div className="flex flex-col items-center justify-end">
            <InterfacesImage />
            <span className=" font-thin mt-10">prototyping</span>
          </div>

        </div>

        </div>
      </main>
    </div>
  );
};
