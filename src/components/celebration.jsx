
const CelebrationSection = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center bg-gray-100 p-8 lg:p-16">
            {/* Left Text Section */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">THE ART OF CELEBRATION</h2>
                <p className="text-gray-600 mb-6">
                    Through the shine and purity of its crafted crystal, each Baccarat creation is
                    an invitation to celebrate life and share a unique and delightful experience.
                </p>
                <a
                    href="#"
                    className="text-gray-800 font-semibold hover:underline flex items-center justify-center lg:justify-start"
                >
                    DISCOVER <span className="ml-2">&rarr;</span>
                </a>
            </div>

            {/* Right Image Section */}
            <div className="lg:w-1/2">
                <img
                    src="/img/celebration.avif" // Replace with the actual image URL
                    alt="Celebration"
                    className="w-full rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default CelebrationSection;
