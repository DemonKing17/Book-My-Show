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

    @GetMapping("/{userID}")
    public UserModel getSingleUserDetails(@PathVariable("userID")String userID) {
        return userService.GetUserDetails(userID);
    }

    @GetMapping
    public List<UserModel> getAllUserDetails(){
        return userService.GetAllUserDetails();
    }

    @PostMapping
    public String createUserDetails(@RequestBody UserModel userModel){
        userService.CreateUserDetails(userModel);
        return "created Successfully";
    }

    @PutMapping
    public String updateUserDetails(@RequestBody UserModel userModel){
        userService.UpdateUserDetails(userModel);
        return "user details updated";
    }

    @DeleteMapping("/{userID}")
    public String deleteUserDetails(@PathVariable("userID") String userID){
        userService.DeleteUserDetails(userID);
        return "user details deleted";
    }
}
