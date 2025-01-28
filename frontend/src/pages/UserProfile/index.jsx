import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OrderItem = styled.div`
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
`;

function UserProfile() {
  return (
    <ProfileContainer>
      <h2>個人資料</h2>
      <ProfileSection>
        <h3>基本資料</h3>
        <p>使用者名稱：User</p>
        <p>電子郵件：user@example.com</p>
      </ProfileSection>
      <ProfileSection>
        <h3>訂單記錄</h3>
        <OrderList>
          <OrderItem>
            <p>訂單編號：#001</p>
            <p>訂單金額：NT$ 999</p>
            <p>訂單狀態：已完成</p>
          </OrderItem>
        </OrderList>
      </ProfileSection>
    </ProfileContainer>
  );
}

export default UserProfile; 