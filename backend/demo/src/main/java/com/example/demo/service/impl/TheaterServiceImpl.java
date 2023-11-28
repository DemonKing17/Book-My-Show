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
    public List<TheaterModel> fetchTheaterDetails(int movieID) {
        return theaterRepository.fetchTheaterDetails(movieID);
    }
}
