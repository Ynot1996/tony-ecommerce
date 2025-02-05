package com.tony.ecommerce.controller;

import com.tony.ecommerce.model.User;
import com.tony.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // 檢查用戶名和電子郵件是否已存在
        if (userService.existsByUsername(user.getUsername())) {
            return ResponseEntity.badRequest().body("用戶名已存在");
        }
        if (userService.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("電子郵件已存在");
        }

        // 保存用戶
        userService.save(user);
        return ResponseEntity.ok("註冊成功");
    }
} 