import React from "react";
import { Link } from "react-router-dom";
import DryKiss from "../../assets/images/DRY KISS.png"

export const DevelopmentStyle = () => {
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
          
          <Link to="/design/why" className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s className="mr-5">development</s>style?</h2>
            <p className="text-white font-thin mb-4">the DRY principle (Don't Repeat Yourself) in coding emphasizes that every piece of knowledge or logic should have a single, unambiguous representation within a system. This principle aims to reduce redundancy in code, promoting efficiency, maintainability, and reducing the risk of errors due to inconsistencies.</p>
            <p className="text-white font-thin mb-4">the KISS principle (Keep It Simple, Stupid) in coding advocates for simplicity and clarity in design. It suggests that systems should be kept as simple as possible, avoiding unnecessary complexity, to enhance readability, maintainability, and understanding by all stakeholders.</p>
          </Link>

          <img src={DryKiss} alt="A village hut and a family of 3 with the sun on the background" />

        </div>
      </main>
    </div>
  );
};
