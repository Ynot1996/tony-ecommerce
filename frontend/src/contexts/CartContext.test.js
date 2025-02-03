import React from 'react';
import { render } from '@testing-library/react';
import { CartProvider } from './CartContext';

jest.mock('axios');
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}));

describe('CartContext', () => {
  it('renders without crashing', () => {
    render(
      <CartProvider>
        <div>Test</div>
      </CartProvider>
    );
  });
}); 