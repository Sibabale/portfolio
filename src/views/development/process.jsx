import React from "react";
import { Link } from "react-router-dom";
import TestImage from "../../assets/images/test.png"
import ThemeImage from "../../assets/images/theme.png"
import ServerImage from "../../assets/images/Server.png"
import ComponentsImage from "../../assets/images/components.png"
import InterfacesImage from "../../assets/images/interfaces.png"
import IntegrationImage from "../../assets/images/Integration.png"

export const DevelopmentProcess = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-between py-5 px-20">
        <Link to="/" className="text-white">sibabale.dev</Link>
        <div className="w-2/12 flex justify-between">
          <Link to="/design" className="text-white">design</Link>
          <Link to="/development" className="text-white line-through">development</Link>
        </div>
      </nav>

      <main>
        <div className="py-60 px-20">
          
          <div  className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s>development</s><span className="ml-5">process</span></h2>
            <ul>
              <li className="list-disc text-white font-thin mb-4">i use TDD (Test Driven Development) language to describe business rules and break them down into stories on a platform like Jira.</li>
              <li className="list-disc text-white font-thin mb-4">from the designs i extract the theme into a JSON object to be used later on my components.</li>
              <li className="list-disc text-white font-thin mb-4">i then use a tools like <Link   to="https://storybook.js.org/" target="_blank"><u>storybook</u></Link> and <Link to="https://www.npmjs.com/" target="_blank"><u>npm</u></Link> to test, code, document and publish my components.</li>
              <li className="list-disc text-white font-thin mb-4">if i am building a full-stack application I would then build my backend server or API</li>
              <li className="list-disc text-white font-thin mb-4">then i would combine all my components to build my user interfaces.</li>
              <li className="list-disc text-white font-thin mb-4">lastly i will do the integration of my backend and frontend code.</li>
            </ul>
            <p className="text-white font-thin mt-10"><i><b className="mr-4"><u>NB</u></b>Depending on a project I follow this is my process chronologically and sometimes I omit some steps.</i></p>
          </div>

          <div className="flex justify-between mb-40">
            <div className="flex flex-col items-center">
              <img src={TestImage} alt="A triangular lab glass filled with a bubling liquid." />
              <span className="text-white font-thin mt-10">test</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={ThemeImage} alt="A JSON object with key value pairs of theme colors for a website" />
              <span className="text-white font-thin mt-10">theme</span>
            </div>
            <div className="flex flex-col items-center">
              <img src={ComponentsImage} alt="A group of web components, a switch, tabs and a calender" />
              <span className="text-white font-thin mt-10">component</span>
            </div>
          </div>
          
          <div className="flex justify-between">
            <div className="flex flex-col items-center justify-end">
              <img src={ServerImage} alt="A group of servers stacked ontop of each other" />
              <span className="text-white font-thin mt-10">server</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <img src={InterfacesImage} alt="A mobile phone and laptop" />
              <span className="text-white font-thin mt-10">interfaces</span>
            </div>
            <div className="flex flex-col items-center justify-end">
              <img src={IntegrationImage} alt="A threaded needle" />
              <span className="text-white font-thin mt-10">integration</span>
            </div>
            

          </div>

        </div>
      </main>
    </div>
  );
};
