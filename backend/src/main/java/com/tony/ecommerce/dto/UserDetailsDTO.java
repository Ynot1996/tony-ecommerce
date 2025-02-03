package com.tony.ecommerce.dto;

import lombok.Data;
import lombok.Builder;

@Data
@Builder
public class UserDetailsDTO {
    private Long id;
    private String username;
    private String email;
} 