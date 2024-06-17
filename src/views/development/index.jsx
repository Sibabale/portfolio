import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export const Develop = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20 ">
          
          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">why?</h2>
            <p className="mb-2">I am a builder at heart, bringing ideas to life is the reason I am on this earth.</p>
            <p>Building an app from an idea to a live working production version is priceless.</p>
            <Link to="/development/why">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">style</h2>
            <p className="  font-thin">Best practices, standards, and conventions always triumph over opinions. Clean code, performance optimization and a great user experience are always priority.</p>
            <Link to="/development/style">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">process</h2>
            <p className="  font-thin">This depends from project to project but I typically start with unit tests then the business logic and deploy</p>
            <Link to="/development/process">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>            
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">tools</h2>
            <p className="mb-2">I am a polygot developer specializing in Javascript and PHP along with all their frameworks.</p>
            <p> I am currently learning Go.</p>
            <Link to="/development/tools">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>    
          </div>

        </div>
      </main>
    </div>
  );
};
