import axios from 'axios';

// 創建 axios 實例
const api = axios.create({
    // 使用環境變量或直接指定
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

// 請求攔截器
api.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request:', config); // 添加請求日誌
        return config;
    },
    error => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// 響應攔截器
api.interceptors.response.use(
    response => {
        console.log('Response:', response); // 添加日誌
        return response;
    },
    error => {
        console.error('Response Error:', error.response || error);
        return Promise.reject(error);
    }
);

export default api; 