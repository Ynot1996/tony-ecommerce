package com.tony.ecommerce.repository;

import com.tony.ecommerce.model.ERole;
import com.tony.ecommerce.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
} 