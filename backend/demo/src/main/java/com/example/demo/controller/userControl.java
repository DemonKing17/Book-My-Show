package com.example.demo.controller;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class userControl {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> createUserDetails(@RequestBody UserModel userModel, @RequestBody String password){
        return userService.createUserDetails(userModel,password);
    }
    @GetMapping("/login")
    public ResponseEntity<String> userLogin(@RequestBody String emailId,@RequestBody String password){
        return userService.generateToken(emailId,password);
    }
}
