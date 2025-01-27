import React from "react";
import heroImg from "../assets/heroImg1.jpg";
import MenuItems from "./MenuItems";

const Hero = () => {
    return (
        <div>
            <div className="relative h-[370px] bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }}>
                <div className="absolute inset-0 flex justify-center items-center text-center bg-opacity-100">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">MENU</h1>
                        <p className="text-lg md:text-xl">Your paragraph goes here. Add any content you like.</p>
                    </div>
                </div>
            </div>
            <MenuItems />
        </div>
    );
};

export default Hero;
