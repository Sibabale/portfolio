import React from "react";
import { Link } from "react-router-dom";

export const Develop = () => {
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
