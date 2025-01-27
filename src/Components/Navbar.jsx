import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <nav className="bg-[#121618] px-10 py-3 fixed w-full top-0 z-10">
            <div className="flex justify-between items-center text-white px-6 md-20">
                <div>
                    <span className="text-2xl font-bold">LOGO</span>
                </div>
                <div className="space-x-4 items-center hidden md:block">
                    <Link to="/" className="hover:text-blue-600 px-4">
                        Home
                    </Link>
                    <Link to="/menu" className="hover:text-blue-600 px-4">
                        Menu
                    </Link>
                    <Link to="/services" className="hover:text-blue-600 px-4">
                        Services
                    </Link>
                    <Link to="/contact" className="hover:text-blue-600 px-4">
                        Contact Us
                    </Link>
                </div>
                <span className={`${isActive ? "hidden" : "block"} md:hidden`} onClick={() => setIsActive(true)}>
                    |||
                </span>
                <span className={`${isActive ? "block" : "hidden"} md:hidden`} onClick={() => setIsActive(false)}>
                    X
                </span>
            </div>
            {isActive && (
                <div className="md:hidden flex flex-col space-y-4 text-white mt-4">
                    <a href="" className="hover:text-blue-600 px-4">
                        Home
                    </a>
                    <a href="" className="hover:text-blue-600 px-4">
                        Menu
                    </a>
                    <a href="" className="hover:text-blue-600 px-4">
                        Services
                    </a>
                    <a href="" className="hover:text-blue-600 px-4">
                        Contact Us{" "}
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
