package com.example.demo.service.impl;

import com.example.demo.model.TheaterModel;
import com.example.demo.repository.TheaterRepository;
import com.example.demo.service.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterServiceImpl implements TheaterService {
    @Autowired
    TheaterRepository theaterRepository;
    @Override
    public ResponseEntity<String> CreateTheaterDetails(TheaterModel theaterModel) {
        try{
            theaterRepository.save(theaterModel);
            return new ResponseEntity<>("success",HttpStatus.OK);
        }catch (Exception e) {
            e.printStackTrace();
        }
        return  new ResponseEntity<>("success",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<TheaterModel>> fetchTheaterDetails(int movieID) {
        try{
            return new ResponseEntity<>(theaterRepository.fetchTheaterDetails(movieID), HttpStatus.OK);
        }catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(theaterRepository.fetchTheaterDetails(movieID), HttpStatus.OK);
    }

    @Override
    public int getTheaterCapacity(int theaterId) {
        return theaterRepository.getCapacity(theaterId);
    }
}
