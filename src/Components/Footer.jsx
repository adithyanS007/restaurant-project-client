import React from "react";
import { FaXTwitter, FaLocationPin } from "react-icons/fa6";
import { FaFacebookF, FaInstagramSquare, FaPhoneAlt, FaRegCopyright } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <footer className="bg-gray-900 px-4 md:px-16 lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 pb-10">
                <div className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 text-sky-800"> Connect With Us</h2>
                    <ul className="flex space-x-4">
                        <li className="pt-1">
                            <FaPhoneAlt />
                        </li>
                        <p>+91 99999456</p>
                    </ul>
                    <ul className="flex space-x-4">
                        <li className="pt-1">
                        <IoIosMail />
                        </li>
                        <p>info@deepnetsoft.com</p>
                    </ul>
                </div>
                <div className="border p-4 rounded-lg shadow-md ">
                    <h2 className="text-lg font-bold mb-4 text-sky-800">LOGO</h2>
                    <ul className="flex space-x-4">
                        <li>
                            <FaXTwitter />
                        </li>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaInstagramSquare />
                        </li>
                    </ul>
                </div>
                <div className="border p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-bold mb-4 text-sky-800">Find Us</h2>
                    <ul className="flex space-x-4">
                        <li className="pt-1">
                            <FaLocationPin />
                        </li>
                        <p>First floor, Geo Infopark</p>
                    </ul>
                </div>
            </div>
            <div className="flex justify-center items-center text-center pb-2">
                <ul className="flex space-x-4">
                    <li className="pt-1">
                    <FaRegCopyright />
                    </li>
                <p > 2024 Deepnetsoft Solutions. All rights reserved.</p>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
