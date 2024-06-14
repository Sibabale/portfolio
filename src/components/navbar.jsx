import React from "react";
import { Link, NavLink } from "react-router-dom";
import {ReactComponent as GithubImage } from "../assets/images/development/github.svg"
import {ReactComponent as DribbleImage } from "../assets/images/design/dribble.svg"

export const Navbar = () => {
    return (
        <nav className="flex py-5 px-5 lg:px-20 justify-end lg:justify-between">
            <div className="hidden w-full lg:flex justify-between ">
                <Link to="/" className="text-2xl font-bold">sibabale</Link>
                <div className="w-4/12 flex justify-between items-center">
                    <NavLink
                        to="/design"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? "line-through" : ""
                        }
                    >
                        design
                    </NavLink>
                    <NavLink
                        to="/development"
                        className={({ isActive, isPending }) =>
                            isPending ? "" : isActive ? " line-through" : ""
                        }
                    >
                        development
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://linktr.ee/sibabale?utm_source=linktree_admin_share"
                    >
                        projects
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://medium.com/@sibabalejoja"
                    >
                        blog
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://firebasestorage.googleapis.com/v0/b/portfolio-5c4f6.appspot.com/o/S.Joja%20CV.pdf?alt=media&token=ff3c1fad-daef-413b-9425-cd9b95bc1cf1"
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
            <span className="lg:hidden material-symbols-outlined">
                menu
            </span>
        </nav>
    );
};
