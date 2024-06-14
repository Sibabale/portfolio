import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export const Develop = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20 ">
          
          <Link to="/development/why" className="w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">Why?</h2>
            <p className="font-thin">I am a builder at heart, bringing ideas to life is the reason I am on this earth.</p>
          </Link>

          <Link to="/development/style" className="w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">Style</h2>
            <p className="  font-thin">Keep it simply stupid (KISS), don't over engineer and follow best practices.</p>
          </Link>

          <Link to="/development/process" className="w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">Process</h2>
            <p className="  font-thin">I write tests then the business logic and deploy</p>
          </Link>

          <Link to="/development/tools" className="w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="  mb-10 text-2xl">Tools</h2>
            <p className="  font-thin">Javascript and PHP along with all their frameworks.</p>
          </Link>

        </div>
      </main>
    </div>
  );
};
