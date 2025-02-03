import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 48px 12px 20px;
  border: 2px solid #e1e1e1;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

function SearchBar({ onSearch }) {
  return (
    <SearchContainer>
      <SearchInput 
        type="text" 
        placeholder="搜尋商品..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </SearchContainer>
  );
}

export default SearchBar; 