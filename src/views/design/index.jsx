import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

export const Design = () => {
  return (
    <div className="overflow-x-hidden">
     <Navbar/>
      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          
          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="text-2xl mb-10">why?</h2>
            <p className=" font-light">How come i am designer? Well i think everyone is born with a talent or a purpose and I was born to design or to be a creative.</p>
             <Link to="/design/why">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="text-2xl  mb-10">style</h2>
            <p className=" font-light">My design style changes from time to time, like any artist I am influenced and inspired by the world around us. Right now mimalism influences most of my designs.</p>
             <Link to="/design/style">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="text-2xl  mb-10">process</h2>
            <p className=" font-light">It all starts with a pen and a paper defining project goals and conducting user research then to doodling and wireframing, followed by a moodboard...</p>
             <Link to="/design/process">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          </div>

          <div className="group w-full lg:w-4/12 mb-20 flex flex-col">
            <h2 className="text-2xl  mb-10">tools</h2>
            <p className=" font-light">Currently Figma is my go to tool when designing with its rich ecosystem of plugins and public resources from the community it is an all in one platform.</p>
             <Link to="/design/tools">
              <button className="self-start mt-5 opacity-1 lg:opacity-0 group-hover:opacity-100 ease-in duration-500">Learn More</button>
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
};
