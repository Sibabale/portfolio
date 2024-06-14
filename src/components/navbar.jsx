import React from "react";
import { Link, NavLink } from "react-router-dom";
import {ReactComponent as GithubImage } from "../assets/images/development/github.svg"
import {ReactComponent as DribbleImage } from "../assets/images/design/dribble.svg"

export const Navbar = () => {
    return (
        <nav className="flex py-5 px-5 lg:px-20 justify-end lg:justify-between">
            <div className="hidden w-full lg:flex justify-between ">
                <Link to="/" className="text-white font-bold">sibabale.dev</Link>
                <div className="w-4/12 flex justify-between items-center">
                    <NavLink
                        to="/design"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-white line-through" : "text-white"
                        }
                    >
                        design
                    </NavLink>
                    <NavLink
                        to="/development"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-white" : isActive ? "text-white line-through" : "text-white"
                        }
                    >
                        development
                    </NavLink>
                    <NavLink className="text-white"
                        target="__blank"
                        to="https://medium.com/@sibabalejoja"
                    >
                        blog
                    </NavLink>
                    <NavLink className="text-white"
                        target="__blank"
                        to="https://firebasestorage.googleapis.com/v0/b/portfolio-5c4f6.appspot.com/o/Sibabale%20Joja's%20CV.pdf?alt=media&token=a828005a-9409-4f19-af2a-f952e11e615f"
                    >
                        cv
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://dribbble.com/JojaSibabale"
                    >
                        <DribbleImage />
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://github.com/sibabale"
                    >
                        <GithubImage />
                    </NavLink>
                </div>
            </div>
            <span className="lg:hidden material-symbols-outlined text-white">
                menu
            </span>
        </nav>
    );
};
