import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Banner = styled.div`
  background-color: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

function Home() {
  return (
    <HomeContainer>
      <Banner>
        <h1>歡迎來到 Tony-Ecommerce</h1>
        <p>探索最優質的商品</p>
      </Banner>
      <h2>熱門商品</h2>
      <ProductGrid>
        {[1, 2, 3, 4].map((item) => (
          <ProductCard key={item}>
            <div>商品 {item}</div>
            <p>NT$ 999</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </HomeContainer>
  );
}

export default Home; 