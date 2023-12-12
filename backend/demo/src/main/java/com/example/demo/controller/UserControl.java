package com.example.demo.controller;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("cinehub/v1/users")
public class UserControl {
    @Autowired
    UserService userService;
    @PostMapping("/register")
    public ResponseEntity<String> createUserDetails(@RequestBody UserModel userModel){
        return userService.createUserDetails(userModel);
    }
    @PostMapping("/login")
    public ResponseEntity<UserModel> userLogin(@RequestBody UserModel userModel){
        String emailId = userModel.getEmail_id();
        String password = userModel.getPasswor();
        return userService.generateToken(emailId,password);
    }
}
