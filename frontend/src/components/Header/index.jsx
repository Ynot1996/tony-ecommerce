import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

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

const NavItem = styled.div`
  a {
    color: #666;
    text-decoration: none;
    &:hover {
      color: #007bff;
    }
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.colors.danger};
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
`;

function Header() {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Tony's Shop</Logo>
        <NavLinks>
          <NavItem>
            <Link to="/products">商品列表</Link>
          </NavItem>
          <NavItem>
            <Link to="/cart" style={{ position: 'relative' }}>
              <FaShoppingCart />
              {cartItemCount > 0 && <CartBadge>{cartItemCount}</CartBadge>}
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/login">登入</Link>
          </NavItem>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 