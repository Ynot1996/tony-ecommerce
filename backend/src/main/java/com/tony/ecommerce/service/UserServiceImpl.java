package com.tony.ecommerce.service;

import com.tony.ecommerce.model.User;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Override
    public boolean existsByUsername(String username) {
        // 這裡應該是查詢資料庫，但目前先回傳 false 來測試
        return false;
    }

    @Override
    public boolean existsByEmail(String email) {
        return false;
    }

    @Override
    public User save(User user) {
        return user; // 暫時回傳 user，這裡未來應該存入資料庫
    }
}

