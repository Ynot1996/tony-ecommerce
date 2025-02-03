import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 忽略特定的警告
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0].includes('React Router Future Flag Warning')) {
    return; // 忽略這個警告
  }
  originalConsoleWarn(...args); // 其他警告正常顯示
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 