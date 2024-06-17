import React from "react";
import { Navbar } from "../../components/navbar";
import { ReactComponent as CatImage} from "../../assets/images/design/cat.svg"

export const WhyDesign = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20 ">
          
          <h2 className="text-2xl mb-10"><span className="auto-strike">design</span><span className="ml-5">why?</span></h2>
          <div className="w-full mb-20 flex flex-col md:flex-row md:mt-20">
            <div className="md:w-1/2 order-2 mb-4">

            <p className="font-thin mb-4">I always loved drawing growing up, we used to draw on the ground with sticks and stones drawing animlas, buses and houses. This cat was one of the things we loved to draw as we  drew often.</p>
            <p className="font-thin ">Later in life I wanted to be an animator or study Fine Art and today I see interfaces as my canvass.</p>
            </div>
            <CatImage className="mb-10 md:mb-0 md:mr-20 md:w-1/2" />
          </div>

        </div>
      </main>
    </div>
  );
};
