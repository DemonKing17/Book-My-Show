package com.example.demo.service.impl;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public String CreateUserDetails(UserModel userModel) {
        userRepository.save(userModel);
        return "Successfully created";
    }

    @Override
    public String UpdateUserDetails(UserModel userModel) {
        userRepository.save(userModel);
        return "Successfully Updated";
    }

    @Override
    public String DeleteUserDetails(String userID) {
        userRepository.deleteById(userID);
        return "Successfully Deleted";
    }

    @Override
    public UserModel GetUserDetails(String userID) {
        return userRepository.findById(userID).get();
    }

    @Override
    public List<UserModel> GetAllUserDetails() {
        return userRepository.findAll();
    }
}
