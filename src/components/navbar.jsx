import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../context/language.jsx";
import { getText } from "../languages/index.js";

const Navbar = () => {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // State to track open dropdown

    const { selectedLanguage, selectedFlag, changeLanguage } = useContext(LanguageContext);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleDropdown = (index) => {
        setOpenDropdownIndex((prev) => (prev === index ? null : index)); // Toggle dropdown
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        {
            title: getText('nav2'),
            dropdown: {
                columns: [
                    {
                        heading: "",
                        links: [
                            <a href={"/osmanli"}>Osmanli</a>,
                            <a href={"/anadolu"}>Anadolu medeniyetleri</a>,
                            "Mineli Camlar",
                            "Camda Mavi Beyaz",
                        ],
                    },
                    {
                        heading: "",
                        links: ["Camda sanaltli Yazi", "Mozaik", "7", "Asure"],
                    },
                ],
            },
        },
    ];

    const nonTransparentPages = ["/products", "/osmanli", "/anadolu"];
    const detailPagePrefixes = ["/product/", "/osmanli/", "/anadolu/"];
    const isProductDetailPage = detailPagePrefixes.some((prefix) =>
        location.pathname.startsWith(prefix)
    );
    const isNonTransparent =
        nonTransparentPages.includes(location.pathname) || isProductDetailPage;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
                    isScrolled || isHovered || isNonTransparent
                        ? "bg-white/80 backdrop-blur-md text-black shadow-md"
                        : "bg-transparent text-white"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex justify-between items-center px-6 py-4">
                    {/* Burger Icon for Mobile */}
                    <div
                        className={`burger ${isMenuOpen ? "open" : ""} block md:hidden`}
                        onClick={toggleMenu}
                    >
                        <div
                            className={`w-[25px] h-[2px] rounded-full block mb-1 duration-300 ${
                                isScrolled || isHovered || isNonTransparent ? "bg-[#050a41]" : "bg-white"
                            }`}
                        ></div>
                        <div
                            className={`w-[25px] h-[2px] rounded-full block mb-1 duration-300 ${
                                isScrolled || isHovered || isNonTransparent ? "bg-[#050a41]" : "bg-white"
                            }`}
                        ></div>
                        <div
                            className={`w-[25px] h-[2px] rounded-full block duration-300 ${
                                isScrolled || isHovered || isNonTransparent ? "bg-[#050a41]" : "bg-white"
                            }`}
                        ></div>
                    </div>

                    {/* Logo */}
                    <div className="text-2xl font-bold cursor-pointer">
                        <a href="/">Baccarat</a>
                    </div>

                    {/* Navigation Links for Desktop */}
                    <ul className="hidden md:flex space-x-6">
                        <li className="cursor-pointer">
                            <a href="/">{getText('nav1')}</a>
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} className="group relative">
                                <button className="hover:text-gray-700">{item.title}</button>
                                {/* Mega Dropdown Menu */}
                                <div
                                    className="absolute left-0 hidden group-hover:flex flex-col bg-white shadow-lg py-4 px-6 w-[600px] border border-gray-200 z-20 rounded-lg"
                                >
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
                            <a href="/about">{getText('nav3')}</a>
                        </li>
                        <li className="cursor-pointer">
                            <a href="/contact">{getText('nav4')}</a>
                        </li>
                    </ul>

                    {/* Language Selector */}
                    <div className="flex items-center gap-[5px] outline-none border-none cursor-pointer">
                        <img
                            src={selectedFlag}
                            style={{ width: "20px", objectFit: "cover" }}
                        />
                        <select
                            className="bg-transparent border-none outline-none cursor-pointer"
                            onChange={(e) => changeLanguage(e.target.value)}
                            value={selectedLanguage}
                        >null
                            <option className="bg-[#fff] border-none" value="uz">
                                Oʻzbek
                            </option>

                            <option className="bg-[#fff] border-none" value="tr">
                                Türkçe
                            </option>
                        </select>
                    </div>
                </div>
            </nav>

            <div
                className={`w-3/4 fixed inset-0 bg-[#f9f9f9] z-50 transform transition-transform duration-300 ${
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <div className="p-6 flex flex-col h-full">
                    {/* Close Button */}
                    <button
                        className="self-end text-2xl font-bold mb-6 text-red-500"
                        onClick={toggleMenu}
                    >
                        &times;
                    </button>
                    <ul className="flex flex-col space-y-4">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className="group border-b border-gray-300 pb-4 last:border-none"
                            >
                                <button
                                    className="flex justify-between items-center w-full text-left text-[#333] font-semibold hover:text-red-500"
                                    onClick={() => toggleDropdown(index)}
                                >
                                    {item.title}
                                    <span
                                        className={`ml-2 transform transition-transform ${
                                            openDropdownIndex === index ? "rotate-180" : "rotate-0"
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </button>
                                {/* Mobile-Specific Dropdown */}
                                {openDropdownIndex === index && (
                                    <ul className="mt-2 space-y-2 pl-4 bg-gray-100 rounded-lg py-2">
                                        {item.dropdown?.columns.map((column, colIndex) =>
                                            column.links.map((link, linkIndex) => (
                                                <li
                                                    key={`${colIndex}-${linkIndex}`}
                                                    className="text-sm text-gray-600 hover:text-blue-500"
                                                >
                                                    {link}
                                                </li>
                                            ))
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                        {/* Additional Static Links */}
                        <li>
                            <a
                                href="/about"
                                className="hover:text-red-500 text-[#333] font-medium"
                            >
                                About us
                            </a>
                        </li>
                        <li>
                            <a
                                href="/products"
                                className="hover:text-red-500 text-[#333] font-medium"
                            >
                                All products
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
