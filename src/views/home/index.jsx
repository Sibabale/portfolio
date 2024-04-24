import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="bg-black h-screen">
      <nav className="flex justify-between py-5 px-20">
        <Link className="text-white">sibabale.dev</Link>
        <div className="w-2/12 flex justify-between">
          <Link to="/design" className="text-white">design</Link>
          <Link to="/development" className="text-white">development</Link>
        </div>
      </nav>

      <main>
        <div className="py-60 px-20">
          
          <div  className=" flex flex-col">
            <h2 className="text-white mb-10 text-8xl">hi</h2>
            <p className="text-white font-thin text-5xl">my name is sibabale</p>
            <p className="text-white font-thin text-5xl">a <span className="designer-text">designer</span> & <span className="developer-text">{`<developer>`}</span></p>
          </div>

        </div>
      </main>
    </div>
  );
};
