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

            userRepository.save(userModel);
            return new ResponseEntity<>("Successfully created", HttpStatus.CREATED);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>("Successfully created", HttpStatus.CREATED);
    }
    public int getUserId(String token){
        try{
            return userRepository.getUserIdByToken(token);
        }catch(Exception e){
            e.printStackTrace();
        }
        return userRepository.getUserIdByToken(token);
    }
    public ResponseEntity<UserModel> generateToken(String username, String password) {
        try{
            UserModel userDetails = loadUserByUsername(username);

            if (!passwordEncoder.matches(password, userDetails.getPasswor())) {
                throw null;
            }

            String token = UUID.randomUUID().toString();

            userDetails.setToken(token);
            userRepository.save(userDetails);

            return new ResponseEntity<>(userRepository.getLoginDetails(username),HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(userRepository.getLoginDetails(username),HttpStatus.OK);
    }

    public boolean isUserValid(String token) {
        int count = userRepository.getUserIdByToken(token);
        return count > 0;
    }

    private UserModel loadUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
