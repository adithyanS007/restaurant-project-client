import React from "react";
import homeImg from "../assets/homeImg.jpg";

const Hero = () => {
    return (
        <div>
            <div className="relative h-[66.67vh] bg-cover bg-center" style={{ backgroundImage: `url(${homeImg})` }}>
                <div className="absolute inset-0 flex justify-center items-center text-center bg-opacity-100">
                    <div className="text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">MENU</h1>
                        <p className="text-lg md:text-xl">Your paragraph goes here. Add any content you like.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Hero;
