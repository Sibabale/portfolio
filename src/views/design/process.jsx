import React from "react";
import {NavLink, Link } from "react-router-dom";

import MotionImage from "../../assets/images/design/bouncing-ball.png"
import IdeationImage from "../../assets/images/design/light-bulb.png"
import WireframeImage from "../../assets/images/design/wireframe.png"
import InterfacesImage from "../../assets/images/design/interfaces.png"
import MagnifyingGlassImage from "../../assets/images/design/magnifying-glass.png"

export const DesignProcess = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-between py-5 px-20">
        <Link to="/" className="text-white">sibabale.dev</Link>
        <div className="w-2/12 flex justify-between">
        <Link to="/design" className="text-white line-through">design</Link>
          <NavLink to="/development" className="text-white">development</NavLink>
        </div>
      </nav>

      <main>
        <div className="py-60 px-20">
          
          <div className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s>design</s><span className="ml-5">process</span></h2>
            <ul>
              <li className="list-disc text-white font-thin mb-4">i first think and brainstorm the idea by building full case study with problem statements and personas.</li>
              <li className="list-disc text-white font-thin mb-4">research is key to validating assumptions and building a solid foundation for a project</li>
              <li className="list-disc text-white font-thin mb-4">hand drawn wireframes are the best way to let my creativity and think process flow freely without the restriction of design tools.</li>
              <li className="list-disc text-white font-thin mb-4">tools like figma then allow me to conceptualize the idea into a product.</li>
              <li className="list-disc text-white font-thin mb-4">motion design brings feelings and life into a applications that are often 2 dimensional and lifeless.</li>
              <li className="list-disc text-white font-thin mb-4">lastly i prototype and test my applications.</li>
            </ul>
            <p className="text-white font-thin mt-10"><i><b className="mr-4"><u>NB</u></b>Depending on a project I follow this is my process chronologically and sometimes I omit some steps.</i></p>
          </div>

        <div className="flex justify-between mb-40">
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
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-end">
            <img src={WireframeImage} alt="A wireframe design" />
            <span className="text-white font-thin mt-10">conceptualise</span>
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
