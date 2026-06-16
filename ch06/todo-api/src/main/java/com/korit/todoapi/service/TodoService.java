package com.korit.todoapi.service;

import com.korit.todoapi.mapper.TodoMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TodoService {
    private final TodoMapper todoMapper;
}
