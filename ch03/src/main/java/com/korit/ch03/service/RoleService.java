package com.korit.ch03.service;

import com.korit.ch03.controller.role.dto.RoleReqCreate;
import com.korit.ch03.entity.Role;
import com.korit.ch03.mapper.RoleMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service    // 5
@RequiredArgsConstructor    // 10
public class RoleService {  // 4
    private final RoleMapper roleMapper; // 9

    public void create(RoleReqCreate dto) {
        System.out.println("service: " + dto);
        Role newRole = Role.builder().roleName(dto.getRoleName()).build();
        roleMapper.insert(newRole);
    }
}
