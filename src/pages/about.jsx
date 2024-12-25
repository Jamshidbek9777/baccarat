
const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
            {/* Hero Section with Background Image */}
            <div
                className="relative bg-cover bg-center h-80 flex items-center justify-center"
                style={{
                    backgroundImage: 'url("/img/bg.jpg")',
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
                <div className="relative text-center text-white">
                    <h1 className="text-5xl font-bold">About Us</h1>
                    <p className="text-lg mt-2">Discover who we are and what makes us unique.</p>
                </div>
            </div>

            {/* Brand Story Section */}
            <div className="container mx-auto py-16 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Brand Story</h2>
                        <p className="text-lg text-gray-600">
                            Our journey began with a dream to create something extraordinary. From humble beginnings, we
                            have grown into a brand that inspires trust, creativity, and innovation.
                            <br /><br />
                            Rooted in a deep passion for excellence, we strive to bring our vision to life through every
                            product and service we offer. Over the years, we've built a legacy of quality and
                            authenticity, always putting our customers first.
                        </p>
                    </div>
                    <div>
                        <img
                            src="/img/pic1.avif"
                            alt="Brand Story"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>

            {/* Emphasis on Quality and Originality Section */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <img
                                src="/img/pic2.avif"
                                alt="Quality and Originality"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                Emphasis on Quality and Originality
                            </h2>
                            <p className="text-lg text-gray-600">
                                Quality is at the heart of everything we do. From the materials we source to the designs
                                we create, our commitment to excellence shines through every step of the process.
                                <br /><br />
                                Originality drives our innovation, setting us apart from the rest. We believe in
                                crafting experiences that are unique, memorable, and timeless. By focusing on
                                authenticity, we ensure that every product reflects our passion for creativity and
                                craftsmanship.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                    <p className="text-sm">© 2024 YourBrand. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
