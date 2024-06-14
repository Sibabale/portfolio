import React from "react";
import { Navbar } from "../../components/navbar";

import { ReactComponent as DryKiss } from "../../assets/images/development/dry-kiss.svg"

export const DevelopmentStyle = () => {
  return (
    <>
      <Navbar/>

      <main>
        <div className="p-10 md:p-20 lg:py-60 lg:px-20">
          
          <h2 className="text-2xl mb-10"><span className="mr-5"><s>development</s></span>style</h2>
          <div className="w-full  mb-20 flex flex-col md:flex-row md:pt-20 md:items-start lg:items-center">
            <div className="order-2 md:order-1 md:w-1/2">
              <p className=" font-thin mb-4">The DRY principle (Don't Repeat Yourself) in coding emphasizes that every piece of knowledge or logic should have a single, unambiguous representation within a system. This principle aims to reduce redundancy in code, promoting efficiency, maintainability, and reducing the risk of errors due to inconsistencies.</p>
              <p className=" font-thin mb-4">the KISS principle (Keep It Simple, Stupid) in coding advocates for simplicity and clarity in design. It suggests that systems should be kept as simple as possible, avoiding unnecessary complexity, to enhance readability, maintainability, and understanding by all stakeholders.</p>
          </div>
            <DryKiss className="w-full md:w-1/2 md:mr-10" />
          </div>

        </div>
      </main>
    </>
  );
};
