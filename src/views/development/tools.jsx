import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";

import { ReactComponent as AWSImage } from "../../assets/images/tools/vectors/aws-s3.svg"
import { ReactComponent as VueImage } from "../../assets/images/tools/vectors/vue.svg"
import { ReactComponent as NodeImage } from "../../assets/images/tools/vectors/nodejs.svg"
import { ReactComponent as ReactImage } from "../../assets/images/tools/vectors/react.svg"
import { ReactComponent as MySQLImage } from "../../assets/images/tools/vectors/mysql.svg"
import { ReactComponent as RelayImage } from "../../assets/images/tools/vectors/relay.svg"
import { ReactComponent as GithubImage } from "../../assets/images/tools/vectors/githubactions.svg"
import { ReactComponent as AdonisImage } from "../../assets/images/tools/vectors/adonijs.svg"
import { ReactComponent as MongoDBImage } from "../../assets/images/tools/vectors/mongodb.svg"
import { ReactComponent as GraphQLImage } from "../../assets/images/tools/vectors/graphql.svg"
import { ReactComponent as LaravelImage } from "../../assets/images/tools/vectors/laravel.svg"
import { ReactComponent as TailwindImage } from "../../assets/images/tools/vectors/tailwind.svg"
import { ReactComponent as MaterialImage } from "../../assets/images/tools/vectors/material.svg"
import { ReactComponent as CircleCIImage } from "../../assets/images/tools/vectors/circleci.svg"
import { ReactComponent as BootstrapImage } from "../../assets/images/tools/vectors/boostrap.svg"
import { ReactComponent as ApolloGraphQLImage } from "../../assets/images/tools/vectors/apollo.svg"



export const DevelopmentTools = () => {
  return (
    <div  >
      <Navbar/>

      <main>
        <div className="p-5 md:p-20 lg:py-60 lg:px-20">
          
          <div  className="w-full lg:w-6/12 mb-20 flex flex-col">
            <h2 className="text-2xl mb-10"><s>development</s><span className="ml-5">tools</span></h2>
            <p className="text-base font-thin mb-4">I use various languages, frameworks and style libraries to efficiently build full-stack applications that are scalable and responsive.</p>
          </div>

          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://react.dev/" target="_blank" className="flex flex-col items-center mx-3">
              <ReactImage className="w-20 h-20 lg:w-40 lg:h-40"/>
              <span className="  font-thin mt-10">react native</span>
            </Link>
            <Link to="https://vuejs.org/" target="_blank" className="flex flex-col items-center mx-3">
              <VueImage className="w-20 h-20 lg:w-40 lg:h-40"/>
              <span className="  font-thin mt-10">vuejs</span>
            </Link>
            <Link to="https://laravel.com/" target="_blank" className="flex flex-col items-center mx-3">
              <LaravelImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">laravel</span>
            </Link>
          </div>

          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://tailwindcss.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <TailwindImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">tailwind</span>
            </Link>
            <Link to="https://getbootstrap.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <BootstrapImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">bootstrap</span>
            </Link>
            <Link to="https://m3.material.io/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <MaterialImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">material ui</span>
            </Link>
          </div>


          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://graphql.org/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <GraphQLImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">graphql</span>
            </Link>
            <Link to="https://relay.dev/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <RelayImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">relay</span>
            </Link>
            <div className="flex flex-col items-center justify-end">
            </div>
          </div>

          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://nodejs.org/en" className="flex flex-col items-center justify-end mx-3">
              <NodeImage alt="The logo of nodejs" className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">nodejs</span>
            </Link>
            <Link to="https://adonisjs.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <AdonisImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">adonisjs</span>
            </Link>
            <Link to="https://www.apollographql.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <ApolloGraphQLImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">apollo graphql</span>
            </Link>
          </div>

          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://www.mysql.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <MySQLImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">mysql</span>
            </Link>
            <Link to="https://www.mongodb.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <MongoDBImage className="w-10 h-20 lg:w-20 lg:h-40" />
              <span className="  font-thin mt-10">mongodb</span>
            </Link>
            <Link to="https://aws.amazon.com/s3/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <AWSImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">aws S3</span>
            </Link>
          </div>
 
          <div className="flex justify-between mb-32 lg:mb-40">
            <Link to="https://circleci.com/" target="_blank" className="flex flex-col items-center justify-end mx-3">
              <CircleCIImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">circle ci</span>
            </Link>
            <Link to="https://github.com/features/actions/" target="_blank" className="flex flex-col items-center justify-end">
              <GithubImage className="w-20 h-20 lg:w-40 lg:h-40" />
              <span className="  font-thin mt-10">github actions</span>
            </Link>
            <div className="flex flex-col items-center justify-end">
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
