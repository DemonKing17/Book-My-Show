package com.example.demo.service;

import com.example.demo.model.UserModel;

import java.util.List;

public interface UserService {
    public String CreateUserDetails(UserModel userModel);
    public String UpdateUserDetails(UserModel userModel);

    public String DeleteUserDetails(String UserModel);
    public UserModel GetUserDetails(String userID);
    public List<UserModel> GetAllUserDetails();
}
