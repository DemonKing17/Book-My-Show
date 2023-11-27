package com.example.demo.service.impl;

import com.example.demo.model.TheaterModel;
import com.example.demo.repository.TheaterRepository;
import com.example.demo.service.TheaterService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService {
    TheaterRepository theaterRepository;
    public TheaterServiceImpl(TheaterRepository theaterRepository) {
        this.theaterRepository = theaterRepository;
    }

    @Override
    public String CreateTheaterDetails(TheaterModel theaterModel) {
        theaterRepository.save(theaterModel);
        return "success";
    }

    @Override
    public String UpdateTheaterDetails(TheaterModel theaterModel) {
        theaterRepository.save(theaterModel);
        return "success";
    }

    @Override
    public String DeleteTheaterDetails(String userID) {
        theaterRepository.deleteById(userID);
        return "success";
    }

    @Override
    public TheaterModel GetTheaterDetails(String userID) {
        return theaterRepository.findById(userID).get();
    }

    @Override
    public List<TheaterModel> GetAllTheaterDetails() {
        return theaterRepository.findAll();
    }
}
