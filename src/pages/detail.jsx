import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const product = products.find((item) => item.id === parseInt(id)); // Find the matching product

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <h1 className="text-2xl font-bold text-gray-600">
                    Product not found!
                </h1>
            </div>
        );
    }


    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="container mx-auto px-6 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-lg rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                        <p className="text-indigo-600 font-bold text-3xl mb-6">${product.price}</p>

                        {/* Quantity Selector */}
                        <div className="flex items-center space-x-4 mb-6">
                            <label htmlFor="quantity" className="text-lg text-gray-700 font-medium">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                defaultValue="1"
                                min="1"
                                className="w-20 px-4 py-2 border rounded-md text-lg text-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        {/* Add to Cart Button */}
                        <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-indigo-700 transition-colors duration-300">
                            Add to Cart
                        </button>

                        {/* Product Rating */}
                        <div className="flex items-center mt-6">
                            <span className="text-lg text-gray-700 mr-2">Rating:</span>
                            <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-yellow-500"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 15l-3.09 1.63.59-3.45L4 9.26l3.42-.49L10 6l1.58 2.77 3.42.49-2.5 3.92.59 3.45L10 15z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
