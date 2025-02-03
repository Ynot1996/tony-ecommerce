import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: #666;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Tony-Ecommerce</Logo>
        <NavLinks>
          <NavLink to="/products">商品</NavLink>
          <NavLink to="/cart">購物車</NavLink>
          <NavLink to="/login">登入</NavLink>
          <NavLink to="/register">註冊</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 