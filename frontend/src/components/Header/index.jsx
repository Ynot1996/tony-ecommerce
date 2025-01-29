import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

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

const UserMenu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary}dd;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Header() {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

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
          {user ? (
            <UserMenu>
              <NavItem>
                <Link to="/profile">
                  <FaUser /> {user.username}
                </Link>
              </NavItem>
              <NavItem>
                <Button onClick={handleLogout}>登出</Button>
              </NavItem>
            </UserMenu>
          ) : (
            <NavItem>
              <Link to="/login">登入</Link>
            </NavItem>
          )}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header; 