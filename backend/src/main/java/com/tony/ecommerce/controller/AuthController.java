package com.tony.ecommerce.controller;

import com.tony.ecommerce.model.User;
import com.tony.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> register(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();

        // 檢查用戶名是否已存在
        if (userService.existsByUsername(user.getUsername())) {
            response.put("error", "用戶名已存在");
            return ResponseEntity.badRequest().body(response);
        }

        // 檢查電子郵件是否已存在
        if (userService.existsByEmail(user.getEmail())) {
            response.put("error", "電子郵件已存在");
            return ResponseEntity.badRequest().body(response);
        }

        // 保存用戶
        userService.save(user);
        response.put("message", "註冊成功");
        return ResponseEntity.ok(response);
    }
} 