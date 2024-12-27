import { useParams } from 'react-router-dom';
import products from '../../data/anadolu.js';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <h1 className="text-3xl font-bold text-gray-700">
                    Product not found!
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 lg:px-20 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Product Image */}
                    <div className="flex ">
                        <img
                            src={product.image || '/fallback-image.jpg'}
                            alt={product.name}
                            className="w-full max-w-md rounded-lg shadow-md object-cover transform hover:scale-105 transition-transform duration-300"
                            onError={(e) =>
                                (e.currentTarget.src = '/fallback-image.jpg')
                            }
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                        <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                        <p className="text-indigo-600 font-semibold text-2xl mb-4">${product.price}</p>



                        {/* Add to Cart Button */}
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-lg hover:bg-indigo-700 transition duration-300 mb-4">
                            Sotib olish
                        </button>




                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Details</h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Material: {product.material || 'Not specified'}</li>
                        <li>Brand: {product.brand || 'Generic'}</li>
                        <li>Available Colors: {product.colors?.join(', ') || 'Standard'}</li>
                        <li>Category: {product.category || 'General'}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
