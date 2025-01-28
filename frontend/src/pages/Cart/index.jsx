import React from 'react';
import styled from 'styled-components';
import { FaTrash } from '@react-icons/all-files/fa/FaTrash';
import { FaMinus } from '@react-icons/all-files/fa/FaMinus';
import { FaPlus } from '@react-icons/all-files/fa/FaPlus';
import { mockCartItems } from '../../utils/mockData';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 1fr 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #0056b3;
  }
`;

const DeleteButton = styled(IconButton)`
  color: #dc3545;
  
  &:hover {
    color: #c82333;
  }
`;

const Total = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #218838;
  }
`;

function Cart() {
  const total = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContainer>
      <h2>購物車</h2>
      {mockCartItems.map(item => (
        <CartItem key={item.id}>
          <ProductImage src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>單價: NT$ {item.price}</p>
          </div>
          <QuantityControl>
            <IconButton><FaMinus /></IconButton>
            <span>{item.quantity}</span>
            <IconButton><FaPlus /></IconButton>
          </QuantityControl>
          <div>NT$ {item.price * item.quantity}</div>
          <DeleteButton>
            <FaTrash />
          </DeleteButton>
        </CartItem>
      ))}
      <Total>
        總計: NT$ {total}
        <CheckoutButton>結帳</CheckoutButton>
      </Total>
    </CartContainer>
  );
}

export default Cart; 