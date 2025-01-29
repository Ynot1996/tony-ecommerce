import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Admin() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/admin/users');
      setUsers(response.data);
    } catch (error) {
      toast.error('獲取用戶列表失敗');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/admin/products');
      setProducts(response.data);
    } catch (error) {
      toast.error('獲取商品列表失敗');
    }
  };

  return (
    <AdminContainer>
      <h1>管理員面板</h1>
      
      <Section>
        <h2>用戶管理</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>用戶名</th>
              <th>郵箱</th>
              <th>角色</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.roles.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section>
        <h2>商品管理</h2>
        {/* 商品管理介面 */}
      </Section>
    </AdminContainer>
  );
}

export default Admin; 