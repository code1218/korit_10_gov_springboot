package com.korit.ch03.service;

import com.korit.ch03.controller.user.dto.UserReqCreate;
import com.korit.ch03.controller.user.dto.UserResp;
import com.korit.ch03.entity.User;
import com.korit.ch03.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserMapper userMapper;

    public UserResp create(UserReqCreate dto) {
        User newUser = User.builder()
                .username(dto.getUsername())
                .password(dto.getPassword())
                .name(dto.getName())
                .email(dto.getEmail())
                .build();

        userMapper.insert(newUser);

        return UserResp.builder()
                .id(newUser.getId())
                .username(newUser.getUsername())
                .name(newUser.getName())
                .email(newUser.getEmail())
                .build();
    }

    public List<UserResp> getAll() {
        List<User> users = userMapper.selectAll();
        return users.stream()
                .map(user -> UserResp.builder()
                    .id(user.getId())
                    .username(user.getUsername())
                    .name(user.getName())
                    .email(user.getEmail())
                    .build())
                .toList();
    }

}









