import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCart = async () => {
        try {
            const response = await axios.get('/api/cart');
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addToCart = async (productId, quantity) => {
        try {
            await axios.post('/api/cart/add', null, {
                params: { productId, quantity }
            });
            await fetchCart();
            toast.success('成功加入購物車！');
        } catch (error) {
            if (error.response?.status === 400) {
                toast.error(error.response.data);
            } else {
                toast.error('加入購物車失敗，請稍後再試');
            }
            console.error('Error adding to cart:', error);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        try {
            await axios.put('/api/cart/update', null, {
                params: { productId, quantity }
            });
            await fetchCart();
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            await axios.delete('/api/cart/remove', {
                params: { productId }
            });
            await fetchCart();
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete('/api/cart/clear');
            setCartItems([]);
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            fetchCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext); 