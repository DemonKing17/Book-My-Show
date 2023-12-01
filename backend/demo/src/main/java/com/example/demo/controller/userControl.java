package com.example.demo.controller;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
@RestController
@RequestMapping("cinehub/v1/users")
public class userControl {
    @Autowired
    UserService userService;

    @PostMapping("/register")
    @PreAuthorize("hasAuthority('USER)")
    public ResponseEntity<String> createUserDetails(@RequestBody UserModel userModel){
        return userService.createUserDetails(userModel);
    }
    @GetMapping("/login")
    public ResponseEntity<String> userLogin(@RequestBody String emailId,@RequestBody String password){
        return userService.generateToken(emailId,password);
    }
}
