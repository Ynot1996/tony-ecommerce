import React from 'react';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #eee;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

function Register() {
  return (
    <RegisterContainer>
      <h2>註冊</h2>
      <Form>
        <Input type="text" placeholder="使用者名稱" />
        <Input type="email" placeholder="電子郵件" />
        <Input type="password" placeholder="密碼" />
        <Input type="password" placeholder="確認密碼" />
        <Button type="submit">註冊</Button>
      </Form>
    </RegisterContainer>
  );
}

export default Register; 