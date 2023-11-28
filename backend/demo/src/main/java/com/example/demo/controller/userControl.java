package com.example.demo.controller;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/registerForm")
public class userControl {

    UserService userService;

    public userControl(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public String createUserDetails(@RequestBody UserModel userModel){
        userService.CreateUserDetails(userModel);
        return "created Successfully";
    }


}
