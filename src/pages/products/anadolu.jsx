import products from '../../data/anadolu.js';

const AnadoluProducts = () => {
    return (
        <div className="min-h-screen  bg-gray-50 py-10">
            <div className="container mx-auto px-6 mt-20">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Our Exclusive Products
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="p-5">
                                <h2 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                                    {product.name}
                                </h2>
                                {/*<p className="text-gray-600 text-sm mt-2">{product.description}</p>*/}
                                <p className="text-indigo-600 font-bold text-lg mt-3">${product.price}</p>
                                <a
                                    href={`/osmanli/${product.id}`}
                                    className="mt-4 inline-block w-full text-center bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                                >
                                    View Details
                                </a>
                            </div>
                            <div className="absolute top-0 left-0 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-br-lg">
                                New
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnadoluProducts;
