import React from "react";
import { Navbar } from "../../components/navbar";

export const Home = () => {
  return (
    <div className="bg-black h-screen">
      <Navbar />

      <main>
        <div className="py-60 px-20">
          
          <div  className=" flex flex-col">
            <h2 className="text-white mb-10 text-8xl">hi</h2>
            <p className="text-white font-thin text-5xl mb-5">my name is sibabale</p>
            <p className="text-white font-thin text-5xl">i am a <span className="designer-text">designer</span> & <span className="developer-text">{`<developer>`}</span></p>
          </div>

        </div>
      </main>
    </div>
  );
};
