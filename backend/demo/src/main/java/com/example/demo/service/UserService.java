package com.example.demo.service;

import com.example.demo.model.UserModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    public ResponseEntity<String> createUserDetails(UserModel userModel);
    public int getUserId(String token);
    public ResponseEntity<String> generateToken(String emailId, String password);
    public boolean isUserValid(String token);
}
