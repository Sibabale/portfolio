import React from "react";
import { Link } from "react-router-dom";
import AWSImage from "../../assets/images/tools/aws.png"
import VueImage from "../../assets/images/tools/vue.png"
import NodeImage from "../../assets/images/tools/nodejs.png"
import ReactImage from "../../assets/images/tools/react.png"
import MySQLImage from "../../assets/images/tools/mysql.png"
import RelayImage from "../../assets/images/tools/relay.png"
import GithubImage from "../../assets/images/tools/github.png"
import AdonisImage from "../../assets/images/tools/adonijs.png"
import GraphQLImage from "../../assets/images/tools/graphql.png"
import MongoDBImage from "../../assets/images/tools/mongodb.png"
import LaravelImage from "../../assets/images/tools/laravel.png"
import MaterialImage from "../../assets/images/tools/material.png"
import CircleCIImage from "../../assets/images/tools/circleci.png"
import TailwindImage from "../../assets/images/tools/tailwindcss.png"
import BootstrapLImage from "../../assets/images/tools/boostrap.png"
import ApolloGraphQLImage from "../../assets/images/tools/apollo.png"

export const DevelopmentTools = () => {
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
          
          <div  className="w-6/12 mb-20 flex flex-col">
            <h2 className="text-white mb-10"><s>development</s><span className="ml-5">tools</span></h2>
          </div>

          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">frameworks</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://react.dev/" className="flex flex-col items-center">
              <img src={ReactImage} alt="A reactive atom." />
              <span className="text-white font-thin mt-10">reactjs & react native</span>
            </Link>
            <Link to="https://vuejs.org/" className="flex flex-col items-center">
              <img src={VueImage} alt="Logo of vuejs" />
              <span className="text-white font-thin mt-10">vuejs</span>
            </Link>
            <Link to="https://laravel.com/" className="flex flex-col items-center">
              <img src={LaravelImage} alt="Logo of laravel" />
              <span className="text-white font-thin mt-10">laravel</span>
            </Link>
          </div>

          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">style libraries</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://tailwindcss.com/" className="flex flex-col items-center justify-end">
              <img src={TailwindImage} alt="A logo of tailwind" />
              <span className="text-white font-thin mt-10">tailwind</span>
            </Link>
            <Link to="https://getbootstrap.com/" className="flex flex-col items-center justify-end">
              <img src={BootstrapLImage} alt="A logo of bootstrap" />
              <span className="text-white font-thin mt-10">bootstrap</span>
            </Link>
            <Link to="https://m3.material.io/" className="flex flex-col items-center justify-end">
              <img src={MaterialImage} alt="The logo of material" />
              <span className="text-white font-thin mt-10">material ui</span>
            </Link>
          </div>


          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">data</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://graphql.org/" className="flex flex-col items-center justify-end">
              <img src={GraphQLImage} alt="A logo of graphql" />
              <span className="text-white font-thin mt-10">graphql</span>
            </Link>
            <Link to="https://relay.dev/" className="flex flex-col items-center justify-end">
              <img src={RelayImage} alt="A mobile phone and relayjs" />
              <span className="text-white font-thin mt-10">relay</span>
            </Link>
            <div className="flex flex-col items-center justify-end">
            </div>
          </div>

          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">server</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://nodejs.org/en" className="flex flex-col items-center justify-end">
              <img src={NodeImage} alt="The logo of nodejs" />
              <span className="text-white font-thin mt-10">nodejs</span>
            </Link>
            <Link to="https://adonisjs.com/" className="flex flex-col items-center justify-end">
              <img src={AdonisImage} alt="The logo of adonisjs" />
              <span className="text-white font-thin mt-10">adonisjs</span>
            </Link>
            <Link to="https://www.apollographql.com/" className="flex flex-col items-center justify-end">
              <img src={ApolloGraphQLImage} alt="The logo of apollo graphql" />
              <span className="text-white font-thin mt-10">apollo graphql</span>
            </Link>
          </div>

          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">databases</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://www.mysql.com/" className="flex flex-col items-center justify-end">
              <img src={MySQLImage} alt="The logo of mysql" />
              <span className="text-white font-thin mt-10">mysql</span>
            </Link>
            <Link to="https://www.mongodb.com/" className="flex flex-col items-center justify-end">
              <img src={MongoDBImage} alt="The logo of mongodb" />
              <span className="text-white font-thin mt-10">mongodb</span>
            </Link>
            <Link to="https://aws.amazon.com/s3/" className="flex flex-col items-center justify-end">
              <img src={AWSImage} alt="The logo of aws" />
              <span className="text-white font-thin mt-10">aws S3</span>
            </Link>
          </div>
 
          <div className="mb-10 w-2/12 border-b"><h2 className="text-white">ci / cd</h2></div>
          <div className="flex justify-between mb-40">
            <Link to="https://circleci.com/" className="flex flex-col items-center justify-end">
              <img src={CircleCIImage} alt="The logo of circleci" />
              <span className="text-white font-thin mt-10">circle ci</span>
            </Link>
            <Link to="https://github.com/features/actions" className="flex flex-col items-center justify-end">
              <img src={GithubImage} alt="The logo of github" />
              <span className="text-white font-thin mt-10">github actions</span>
            </Link>
            <div className="flex flex-col items-center justify-end">
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
