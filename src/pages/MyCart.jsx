import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total cart value
  const cartTotal = cart.reduce((total, item) => total + (item.Price * item.quantity), 0);

  // Animation variants for list items
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,  // Slide from left
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20 
      }
    },
    exit: { 
      opacity: 0, 
      x: 100,  // Slide out to right
      scale: 0.8,
      transition: { 
        duration: 0.3 
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Your Shopping Cart
        </h2>

        {cart.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Your cart is empty. Start shopping!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence>
              {cart.map((item, index) => (
                <motion.div 
                  key={`${item.id}-${item.size}`}  // Unique key for each variant
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout  // Enables smooth layout transitions
                  className="flex flex-col md:flex-row bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="md:w-1/3 lg:w-1/4 p-4 flex items-center justify-center">
                    <motion.img 
                      src={item.image} 
                      alt={item.title} 
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="max-h-48 w-auto object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow p-4 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                           {item.description}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          Size: {item.size}
                        </p>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item)}
                        className="text-red-500 hover:text-red-700 dark:text-red-400"
                      >
                        <FaTrash />
                      </motion.button>
                    </div>

                    {/* Quantity and Price Control */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="bg-gray-200 dark:bg-zinc-700 p-2 rounded-full"
                        >
                          <FaMinus />
                        </motion.button>
                        <span className="text-lg font-semibold dark:text-white">
                          {item.quantity}
                        </span>
                        <motion.button 
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="bg-gray-200 dark:bg-zinc-700 p-2 rounded-full"
                        >
                          <FaPlus />
                        </motion.button>
                      </div>
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${(item.Price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Cart Total */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 flex justify-between items-center"
            >
              <span className="text-2xl font-bold dark:text-white">
                Total
              </span>
              <span className="text-2xl font-bold text-green-600">
                ${cartTotal.toFixed(2)}
              </span>
            </motion.div>

            {/* Checkout Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white px-8 py-3 rounded-lg text-xl font-bold hover:bg-green-600 transition duration-300"
              >
                Proceed to Checkout
              </motion.button>
            </motion.div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;