import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
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

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  margin-top: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, fetchCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = cartItems.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
  );

  const handleQuantityChange = (productId, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <CartContainer>
      {cartItems.length === 0 ? (
        <EmptyCart>
          <h2>購物車是空的</h2>
          <button onClick={() => navigate('/products')}>繼續購物</button>
        </EmptyCart>
      ) : (
        <>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <ProductImage src={item.product.imageUrl} alt={item.product.name} />
              <div>
                <h3>{item.product.name}</h3>
                <p>單價: NT$ {item.price}</p>
              </div>
              <QuantityControl>
                <IconButton onClick={() => handleQuantityChange(item.product.id, item.quantity, -1)}>
                  <FaMinus />
                </IconButton>
                <span>{item.quantity}</span>
                <IconButton onClick={() => handleQuantityChange(item.product.id, item.quantity, 1)}>
                  <FaPlus />
                </IconButton>
              </QuantityControl>
              <div>NT$ {item.price * item.quantity}</div>
              <DeleteButton onClick={() => removeFromCart(item.product.id)}>
                <FaTrash />
              </DeleteButton>
            </CartItem>
          ))}
          <Total>
            總計: NT$ {total}
            <CheckoutButton onClick={handleCheckout}>結帳</CheckoutButton>
          </Total>
        </>
      )}
    </CartContainer>
  );
}

export default Cart; 