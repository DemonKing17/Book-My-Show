package com.example.demo.service;

import com.example.demo.model.TheaterModel;
import com.example.demo.model.UserModel;

import java.util.List;

public interface TheaterService {
    public String CreateTheaterDetails(TheaterModel theaterModel);
    public List<TheaterModel> fetchTheaterDetails(int movieID);
}
