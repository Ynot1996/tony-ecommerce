import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import { mockProducts } from '../../utils/mockData';

const ProductListContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FilterSection = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ProductPrice = styled.p`
  color: #007bff;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ProductListContainer>
      <FilterSection>
        <h2>商品列表</h2>
        <SearchBar onSearch={setSearchTerm} />
      </FilterSection>
      <ProductGrid>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} to={`/product/${product.id}`}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>NT$ {product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductListContainer>
  );
}

export default ProductList; 