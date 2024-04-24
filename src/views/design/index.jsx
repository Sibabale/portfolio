import React from "react";
import { Link } from "react-router-dom";

export const Design = () => {
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
        <div className="pl-60 pt-60">
          
          <Link to="/design/why" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">why?</h2>
            <p className="text-white font-thin">how come i am designer? well i think everyone is born with a talent or a purpose and I was born to design or to be a creative.</p>
          </Link>

          <Link to="/design/style" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">style</h2>
            <p className="text-white font-thin">morden minimalist.</p>
          </Link>

          <Link to="/design/process" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">process</h2>
            <p className="text-white font-thin">define project goals, conducting user research, create wireframes and high-fidelity mockups before prototyping. rinse & repeat</p>
          </Link>

          <Link to="/design/tools" className="w-4/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10">tools</h2>
            <p className="text-white font-thin">to efficiently visualize, iterate, and present my design work throughout the project lifecycle i use various tools like...</p>
          </Link>

        </div>
      </main>
    </div>
  );
};
