package com.korit.ch03.controller.role;

import com.korit.ch03.common.dto.ApiResponse;
import com.korit.ch03.controller.role.dto.RoleReqCreate;
import com.korit.ch03.service.RoleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api/roles") // 3
@RestController // 2
@RequiredArgsConstructor // 12
public class RoleController { // 1
    private final RoleService roleService; // 11

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody RoleReqCreate dto) {
        System.out.println("controller: " + dto);
        roleService.create(dto);
        return ResponseEntity.ok(ApiResponse.ok());
    }
}
