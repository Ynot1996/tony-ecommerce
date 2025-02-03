import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { mockProducts } from '../../utils/mockData';

const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

const ProductImage = styled.div`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  const product = mockProducts.find(p => p.id === parseInt(id)) || {
    name: "商品名稱",
    price: 999,
    description: "商品描述",
    image: "https://picsum.photos/400/400?random=" + id
  };

  const handleAddToCart = async () => {
    setLoading(true);
    try {
      const result = await addToCart(id, quantity);
      if (result.needLogin) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProductDetailContainer>
      <ProductInfo>
        <ProductImage>
          <img src={product.image} alt={product.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </ProductImage>
        <ProductDetails>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>NT$ {product.price}</p>
          <QuantityControl>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </QuantityControl>
          <Button 
            onClick={handleAddToCart} 
            disabled={loading}
          >
            {loading ? '加入中...' : '加入購物車'}
          </Button>
        </ProductDetails>
      </ProductInfo>
    </ProductDetailContainer>
  );
}

export default ProductDetail; 