package com.tony.ecommerce.service;

import com.tony.ecommerce.model.User;
import com.tony.ecommerce.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import lombok.extern.slf4j.Slf4j;
import com.tony.ecommerce.exception.UserNotFoundException;
import com.tony.ecommerce.exception.InvalidPasswordException;
import com.tony.ecommerce.dto.RegisterRequest;
import com.tony.ecommerce.dto.UserDetailsDTO;
import com.tony.ecommerce.service.AuditLogService;
import java.util.Optional;

public interface UserService {
    @Transactional
    User createUser(RegisterRequest request);

    @Transactional
    void updatePassword(Long userId, String oldPassword, String newPassword);

    @Transactional(readOnly = true)
    UserDetailsDTO getUserDetails(Long userId);

    User findByUsername(String username);

    User save(User user);

    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);
} 