import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export const Develop = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <main>
        <div className="pl-60 pt-60">
          
          <Link to="/development/why" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">why?</h2>
            <p className="text-white font-thin">i am a builder at heart, bringing ideas to life is the reason I am on this earth.</p>
          </Link>

          <Link to="/development/style" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">style</h2>
            <p className="text-white font-thin">keep it simply stupid (KISS), don't over engineer and follow best practices.</p>
          </Link>

          <Link to="/development/process" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">process</h2>
            <p className="text-white font-thin">i write tests then the business logic and deploy</p>
          </Link>

          <Link to="/development/tools" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">tools</h2>
            <p className="text-white font-thin">Javascript and PHP along with all their frameworks.</p>
          </Link>

        </div>
      </main>
    </div>
  );
};
