import React from "react";
import { Link } from "react-router-dom";
import CatImage from "../../assets/images/design/cat.png"

export const WhyDesign = () => {
  return (
    <div className="bg-black">
      <nav className="flex justify-between py-5 px-20">
        <Link to="/" className="text-white">sibabale.dev</Link>
        <div className="w-2/12 flex justify-between">
        <Link to="/design" className="text-white line-through">design</Link>
          <Link to="/development" className="text-white">development</Link>
        </div>
      </nav>

      <main>
        <div className="py-60 px-20">
          
          <div className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><span className="mr-5">why?</span><s>design</s></h2>
            <p className="text-white font-thin mb-4">at one point in my life i wanted to be an animator, i loved drawing cartoons</p>
          </div>

          <img src={CatImage} alt="A drawing of a cat" />

        </div>
      </main>
    </div>
  );
};
