/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa6";
import Button from "./Button";
import { useCart } from "../context/CartContext"; // Import cart context


export default function ProductDetail({ product, onClose }) {
  const sizes = ["S", "M", "L", "XL", "2XL"];
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart(); // Get cart context
  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size!");
      return;
    }

    addToCart(product, selectedSize, quantity); // Add to cart
    onClose(); // Close the modal
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm"
      style={{ overscrollBehavior: 'contain' }}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <div 
          className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl 
          relative overflow-y-auto max-h-[90vh] sm:max-h-[95vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:hover:text-white z-10"
          >
            ✕
          </button>

          {/* Scrollable Content Container */}
          <div className="overflow-y-auto max-h-[80vh] p-6">
            {/* Responsive Layout */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Image */}
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-64 object-contain rounded"
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col justify-center text-center sm:text-left sm:w-1/2 space-y-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-red-600">
                  {product.title}
                </h2>
                <p className="text-3xl font-bold text-black dark:text-white">
                  ${product.Price}
                </p>
                <p className="text-gray-700 dark:text-white">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">Select Size:</h3>
                  <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md transition ${
                          selectedSize === size
                            ? "bg-red-500 text-white"
                            : "bg-zinc-300 dark:bg-zinc-600 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">Quantity:</h3>
                  <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                    <button
                      onClick={decreaseQuantity}
                      className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600"
                    >
                      -
                    </button>
                    <span className="text-xl dark:text-white font-medium">{quantity}</span>
                    <button
                      onClick={increaseQuantity}
                      className="px-4 py-2 border rounded-md bg-gray-200 dark:bg-zinc-700 dark:text-white hover:bg-gray-300 dark:hover:bg-zinc-600"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <Button selectedSize={selectedSize} onClose={onClose} product={product} quantity={quantity} onClick={handleAddToCart}>
                  <FaBriefcase className="text-lg" />
                  <span className="text-base font-medium">
                    {selectedSize ? `Add ${selectedSize} to Cart` : "Add to Cart"}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}