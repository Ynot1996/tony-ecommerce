package com.tony.ecommerce.service;

import com.tony.ecommerce.model.User;

public interface UserService {
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
    User save(User user);
} 