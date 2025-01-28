package com.tony.ecommerce.controller;

import com.tony.ecommerce.dto.JwtResponse;
import com.tony.ecommerce.dto.LoginRequest;
import com.tony.ecommerce.dto.RegisterRequest;
import com.tony.ecommerce.model.ERole;
import com.tony.ecommerce.model.Role;
import com.tony.ecommerce.model.User;
import com.tony.ecommerce.security.JwtUtils;
import com.tony.ecommerce.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateToken((UserDetails) authentication.getPrincipal());

        UserDetails userDetails = (UserDetails) authentication.getPrincipal();
        User user = userService.findByUsername(userDetails.getUsername());

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, 
                user.getId(), 
                user.getUsername(), 
                user.getEmail(), 
                roles));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        Set<Role> roles = new HashSet<>();
        Role userRole = new Role();
        userRole.setName(ERole.ROLE_USER);
        roles.add(userRole);
        user.setRoles(roles);

        userService.createUser(user);

        return ResponseEntity.ok("User registered successfully!");
    }
} 