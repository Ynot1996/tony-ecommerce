import React, { useEffect } from 'react';
import { render, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import axios from 'axios';

jest.mock('axios');
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

describe('CartContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch cart items successfully', async () => {
    const mockCartItems = [
      { id: 1, product: { id: 1, name: 'Test Product' }, quantity: 1, price: 100 }
    ];
    
    axios.get.mockResolvedValueOnce({ data: mockCartItems });

    const TestComponent = () => {
      const { cartItems, fetchCart } = useCart();
      useEffect(() => {
        fetchCart();
      }, [fetchCart]);
      
      return <div>{cartItems.length}</div>;
    };

    let container;
    await act(async () => {
      container = render(
        <CartProvider>
          <TestComponent />
        </CartProvider>
      );
    });

    expect(container.getByText('1')).toBeInTheDocument();
  });

  // ... 添加更多測試用例 ...
}); 