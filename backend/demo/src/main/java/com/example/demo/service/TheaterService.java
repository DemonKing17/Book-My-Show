package com.example.demo.service;

import com.example.demo.model.TheaterModel;
import com.example.demo.model.UserModel;
import org.springframework.http.ResponseEntity;

import java.util.List;
public interface TheaterService {
    public String CreateTheaterDetails(TheaterModel theaterModel);
    public ResponseEntity<List<TheaterModel>> fetchTheaterDetails(int movieID);
    public int getTheaterCapacity(int theaterId);
}
