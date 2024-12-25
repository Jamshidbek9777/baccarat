import React, { useState, useEffect } from "react";
import { FaSearch, FaUser, FaPhone } from "react-icons/fa";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        {
            title: "Barware & Dining",
            dropdown: {
                columns: [
                    {
                        heading: "Fine Pieces",
                        links: ["Glassware", "Dinner Sets", "Bar Accessories", "Wine Glasses"],
                    },
                    {
                        heading: "Masterpieces",
                        links: ["Animal Sculptures", "Clocks & Mirrors", "Prestige Vases"],
                    },
                ],
            },
        },
        {
            title: "Home Decor",
            dropdown: {
                columns: [
                    {
                        heading: "Fine Pieces",
                        links: ["Vases", "Candles", "Decorative Objects", "Clocks & Mirrors"],
                    },
                    {
                        heading: "Embellish",
                        links: ["Dogs and Cats", "Bouquets of Light", "Under the Sun"],
                    },
                ],
            },
        },
    ];

    // Define pages where the navbar should be non-transparent
    const nonTransparentPages = "/products";
    const isProductDetailPage = location.pathname.startsWith("/product/");
    const isNonTransparent = nonTransparentPages.includes(location.pathname) || isProductDetailPage;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
                isScrolled || isHovered || isNonTransparent ? "bg-white text-black shadow-md" : "bg-transparent text-white"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="text-2xl font-bold cursor-pointer">
                    <a href="/">Baccarat</a>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6">
                    {menuItems.map((item, index) => (
                        <li key={index} className="group relative">
                            <button className="hover:text-gray-700">{item.title}</button>
                            {/* Mega Dropdown Menu */}
                            <div className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg py-4 px-6 w-[600px] border border-gray-200 z-20">
                                <div className="flex justify-between">
                                    {item?.dropdown?.columns.map((column, colIndex) => (
                                        <div key={colIndex} className="w-1/2">
                                            <h4 className="font-bold mb-2">{column.heading}</h4>
                                            <ul>
                                                {column.links.map((link, linkIndex) => (
                                                    <li
                                                        key={linkIndex}
                                                        className="mb-1 hover:text-gray-700 cursor-pointer"
                                                    >
                                                        {link}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                    <li className="cursor-pointer">
                        <a href="/about">About us</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="/products">All products</a>
                    </li>
                </ul>

                {/* Icons */}
                <div className="flex space-x-4">
                    <button className="p-2 rounded-full hover:bg-gray-200">
                        <FaSearch />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200">
                        <FaUser />
                    </button>
                    <button className="p-2 rounded-full hover:bg-gray-200">
                        <a href="/contact">
                            <FaPhone />
                        </a>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex justify-between items-center px-6 py-4">
                <div className="text-xl font-bold">Menu</div>
                <button className="p-2 border rounded">☰</button>
            </div>
        </nav>
    );
};

export default Navbar;
