package com.example.demo.service;

import com.example.demo.model.UserModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    public ResponseEntity<String> createUserDetails(UserModel userModel);

    public ResponseEntity<String> generateToken(String emailId, String password);
}
