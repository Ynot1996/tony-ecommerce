import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem;
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>&copy; 2024 Tony-Ecommerce. All rights reserved.</p>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer; 