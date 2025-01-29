-- 插入管理員角色（如果不存在）
INSERT INTO roles (name)
SELECT 'ROLE_ADMIN'
WHERE NOT EXISTS (
    SELECT 1 FROM roles WHERE name = 'ROLE_ADMIN'
);

-- 創建管理員帳號
INSERT INTO users (username, email, password, created_at)
SELECT 'admin', 'admin@example.com', 
'$2a$10$YYQhYDPVTIpwx.YhXkZQvOtXqw3BJ7YBQkJY1VF2BN0jVrJvPHKYi', -- 密碼是 'admin123'
CURRENT_TIMESTAMP
WHERE NOT EXISTS (
    SELECT 1 FROM users WHERE username = 'admin'
);

-- 給管理員賦予所有角色
INSERT INTO user_roles (user_id, role_id)
SELECT u.id, r.id
FROM users u, roles r
WHERE u.username = 'admin'
AND NOT EXISTS (
    SELECT 1 FROM user_roles 
    WHERE user_id = u.id AND role_id = r.id
); 