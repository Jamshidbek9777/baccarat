import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Eduagancy</h2>
                        <p>
                            Providing high-quality products and exceptional customer service since 2023. We aim to bring style and functionality to your daily life.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Products</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <p>Email: <a href="mailto:info" className="hover:underline">info@eduagency.uz</a></p>
                        <p>Phone: +998 93 205 97 77</p>
                        <p>Address: Tashkent, Uzbekistan</p>
                        <div className="mt-4 flex space-x-4">
                            <a href="#" className="hover:text-gray-400">
                                {/* Facebook Icon */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8H7v4H3v4h4v8h4v-8h3.5l.5-4H11V9c0-.847.16-1 1-1h2V4h-3c-2.086 0-3 .914-3 3v2z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                {/* Twitter Icon */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557a9.816 9.816 0 01-2.828.775A4.931 4.931 0 0023.337 3.2a9.864 9.864 0 01-3.127 1.2A4.921 4.921 0 0016.616 2c-2.72 0-4.927 2.207-4.927 4.917a4.878 4.878 0 001.113 3.174A13.978 13.978 0 011.67 3.15a4.936 4.936 0 001.523 6.573 4.908 4.908 0 01-2.231-.616v.061c0 2.278 1.611 4.176 3.744 4.605a4.952 4.952 0 01-2.224.085c.628 1.956 2.448 3.384 4.604 3.425a9.864 9.864 0 01-6.102 2.101c-.395 0-.787-.023-1.17-.067A13.933 13.933 0 008.043 21c9.057 0 14.007-7.514 14.007-14.02 0-.213-.004-.426-.014-.636A10.005 10.005 0 0024 4.557z" />
                                </svg>
                            </a>
                            <a href="#" className="hover:text-gray-400">
                                {/* Instagram Icon */}
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5C19.216 2 21 3.784 21 5.75v8.5C21 16.216 19.216 18 17.25 18h-8.5C4.784 18 3 16.216 3 14.25v-8.5C3 3.784 4.784 2 7.75 2zm0 2C6.784 4 6 4.784 6 5.75v8.5c0 .966.784 1.75 1.75 1.75h8.5c.966 0 1.75-.784 1.75-1.75v-8.5C18 4.784 17.216 4 16.25 4h-8.5zM12 8a4 4 0 100 8 4 4 0 000-8zm0 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm4.5-2.5a1 1 0 110 2 1 1 0 010-2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-700 my-6" />

                {/* Bottom Section */}
                <div className="text-center text-sm">
                    © {new Date().getFullYear()} Eduagency. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
