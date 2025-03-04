/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart with quantity check
  const addToCart = (product, selectedSize, quantity) => {
    const existingItemIndex = cart.findIndex(
      item => item.id === product.id && item.size === selectedSize
    );

    if (existingItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      const newItem = { 
        ...product, 
        size: selectedSize, 
        quantity 
      };
      setCart(prevCart => [...prevCart, newItem]);
    }
  };

  // Remove specific item from cart
  const removeFromCart = (itemToRemove) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        item.id !== itemToRemove.id || item.size !== itemToRemove.size
      )
    );
  };

  // Update quantity of a specific cart item
  const updateQuantity = (item, newQuantity) => {
    // Prevent negative quantities
    if (newQuantity < 1) return;

    setCart(prevCart => 
      prevCart.map(cartItem => 
        cartItem.id === item.id && cartItem.size === item.size
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);