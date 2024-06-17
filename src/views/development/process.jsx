import React from "react";
import { Link } from "react-router-dom";

import { Navbar } from "../../components/navbar";

import { ReactComponent as TestImage } from "../../assets/images/development/process/vectors/test.svg"
import { ReactComponent as ThemeImage } from "../../assets/images/development/process/vectors/theme.svg"
import { ReactComponent as ServerImage } from "../../assets/images/development/process/vectors/server.svg"
import { ReactComponent as ComponentsImage } from "../../assets/images/development/process/vectors/components.svg"
import { ReactComponent as InterfacesImage } from "../../assets/images/development/process/vectors/interfaces.svg"
import { ReactComponent as IntegrationImage } from "../../assets/images/development/process/vectors/integration.svg"

export const DevelopmentProcess = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <div className="p-10 lg:p-20 lg:py-60 lg:px-20">
          
          <div className="w-full lg:w-6/12 mb-20 flex flex-col">
            <h2 className=" text-2xl mb-28 lg:mb-10"><span className="auto-strike">development</span><span className="ml-5">process</span></h2>
            <ul>
              <li className="font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <TestImage className="w-10" />
                  <span className=" font-thin ml-5">Test</span>
                </div>
                <p>I use TDD (Test Driven Development) language to describe business rules and break them down into stories on a platform like Jira.</p>
              </li>
              <li className="font-thin mb-20 lg:mb-4">
                <div className="lg:hidden flex items-center mb-5">
                  <ThemeImage className="w-10" />
                  <span className=" font-thin ml-5">Theme</span>
                </div>
                <p>From the designs i extract the theme into a JSON object to be used later on my components.</p>
              </li>
              <li className="font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <ComponentsImage className="w-10" />
                    <span className=" font-thin ml-5">Components</span>
                  </div>
                  <p>I then use a tools like <Link   to="https://storybook.js.org/" target="_blank"><u>storybook</u></Link> and <Link to="https://www.npmjs.com/" target="_blank"><u>npm</u></Link> to test, code, document and publish my components.</p>
              </li>
              <li className="font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <ServerImage className="w-10" />
                    <span className=" font-thin ml-5">Server</span>
                  </div>
                  <p>If i am building a full-stack application I would then build my backend server or API</p>
              </li>
              <li className="font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <InterfacesImage className="w-20" />
                    <span className=" font-thin ml-5">Interfaces</span>
                  </div>
                  <p>Then i would combine all my components to build my user interfaces.</p>
              </li>
              <li className="font-thin mb-20 lg:mb-4">
                  <div className="lg:hidden flex items-center mb-5">
                    <IntegrationImage className="w-20" />
                    <span className=" font-thin ml-5">Integration</span>
                  </div>
                  <p>Lastly i will do the integration of my backend and frontend code.</p>
              </li>
            </ul>
            <p className=" font-thin mt-10"><i><b className="text-2xl mr-4"><u>NB</u></b>Depending on a project I follow this is my process chronologically and sometimes I omit some steps.</i></p>
          </div>

        <div className="hidden lg:flex justify-between mb-40">
          <div className="flex flex-col items-center mx-3">
            <TestImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Test</span>
          </div>
          <div className="flex flex-col items-center mx-3">
            <ThemeImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Theme</span>
          </div>
          <div className="flex flex-col items-center mx-3">
            <ComponentsImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Component</span>
          </div>
        </div>
        <div className="hidden lg:flex justify-between">
          <div className="flex flex-col items-center mx-3 justify-end">
            <ServerImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Server</span>
          </div>
          <div className="flex flex-col items-center mx-3 justify-end">
            <InterfacesImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Interfaces</span>
          </div>
          <div className="flex flex-col items-center mx-3 justify-end">
            <IntegrationImage className="w-40 h-40" />
            <span className=" font-thin mt-10">Integration</span>
          </div>
          

        </div>

        </div>
      </main>
    </div>
  );
};
