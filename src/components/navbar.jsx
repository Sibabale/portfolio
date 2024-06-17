import {useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as GithubImage } from "../assets/images/development/github.svg"
import { ReactComponent as DribbleImage } from "../assets/images/design/dribble.svg"

export const Navbar = () => {

    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);
    return (
        <nav className="relative z-50">
            <div className="flex py-5 px-5 lg:px-20 justify-end lg:justify-between">
                <div className="hidden w-full lg:flex justify-between ">
                    <Link to="/" className="text-2xl font-bold">sibabale</Link>
                    <div className="w-4/12 flex justify-between items-center">
                        <NavLink
                            to="/design"
                            className={({ isActive, isPending }) =>
                                isPending ? "strike" : isActive ? "line-through" : "strike"
                            }
                        >
                            design
                        </NavLink>
                        <NavLink
                            to="/development"
                            className={({ isActive, isPending }) =>
                                isPending ? "strike" : isActive ? " line-through" : "strike"
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
                <div className="lg:hidden">
                    <span 
                        className=" material-symbols-outlined" 
                        onClick={
                            () => setMobileMenuVisibility(true)
                        }
                    >
                        menu
                    </span>
                
                </div>
            </div>
            <div 
                className={`mobile-nav lg:hidden absolute max-w-full right-0 top-0  bg-black/60 w-full h-screen flex flex-col justify-between ${isMobileMenuVisible ? 'slide-in' : 'slide-out'}`}
            >
                <div className="p-5 shadow-md  bg-[#fdf7f1] h-fit flex flex-col">

                    <span className="text-4xl self-end" 
                    onClick={
                        () => setMobileMenuVisibility(false)
                    }
                    >
                        x
                    </span>
                    <NavLink
                        to="/design"
                        className={({ isActive, isPending }) =>
                            isPending ? "strike" : isActive ? "mb-5 line-through" : "mb-5 strike"
                        }
                    >
                        design
                    </NavLink>
                    <NavLink
                        to="/development"
                        className={({ isActive, isPending }) =>
                            isPending ? "strike" : isActive ? " mb-5 line-through" : "mb-5 strike"
                        }
                    >
                        development
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://linktr.ee/sibabale?utm_source=linktree_admin_share"
                        className="mb-5"
                    >
                        projects
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://medium.com/@sibabalejoja"
                        className="mb-5"
                    >
                        blog
                    </NavLink>
                    <NavLink
                        target="__blank"
                        to="https://firebasestorage.googleapis.com/v0/b/portfolio-5c4f6.appspot.com/o/S.Joja%20CV.pdf?alt=media&token=ff3c1fad-daef-413b-9425-cd9b95bc1cf1"
                        className="mb-5"
                    >
                        cv
                    </NavLink>
                    <div className="flex">
                    <NavLink
                        target="__blank"
                        className="mr-5"
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
            </div>
        </nav>
    );
};
