package com.example.demo.service.impl;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    public ResponseEntity<String> createUserDetails(UserModel userModel) {
        try {
            userModel.setPasswor(passwordEncoder.encode(userModel.getPasswor()));
            String token = UUID.randomUUID().toString();
            userModel.setToken(token);
            userRepository.save(userModel);
            return new ResponseEntity<>("Successfully created", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Successfully created", HttpStatus.CREATED);
    }


    public ResponseEntity<String> generateToken(String username, String password) {
        try{
            UserModel userDetails = loadUserByUsername(username);

            if (!passwordEncoder.matches(password, userDetails.getPasswor())) {
                return new ResponseEntity<>("Failed to Login", HttpStatus.UNAUTHORIZED);
            }

            String token = UUID.randomUUID().toString();

            userDetails.setToken(token);
            userRepository.save(userDetails);

            return new ResponseEntity<>("Token",HttpStatus.CREATED);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("Token",HttpStatus.CREATED);
    }

    public boolean isUserValid(String token) {
        int count = userRepository.getUserIdByToken(token);
        return count > 0;
    }

    private UserModel loadUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
