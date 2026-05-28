package com.korit.ch02.config;

import com.korit.ch02.component.CustomerUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class CustomerConfig {

//    private final CustomerUtil customerUtil;

    @Bean
    public CustomerUtil customerUtil() {
        System.out.println("이거 실행 언제됨????");
        return new CustomerUtil();
    }
}
