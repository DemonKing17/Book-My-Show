package com.example.demo.service.impl;

import com.example.demo.model.ShowModel;
import com.example.demo.repository.ShowRepository;
import com.example.demo.service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowServiceImpl implements ShowService {
    @Autowired
    ShowRepository showRepository;

    @Autowired
    TheaterServiceImpl theaterService;
    @Override
    public ResponseEntity<String> CreateShowDetails(ShowModel showModel) {
        try{
            showModel.setTheater_capacity(theaterService.getTheaterCapacity(showModel.getTheater_id()));
            showRepository.save(showModel);
            return new ResponseEntity<>("success",HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>("success",HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<ShowModel>> fetchShows(int movieID, int theaterID) {
        try{
            return new ResponseEntity<>(showRepository.fetchShows(movieID, theaterID), HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(showRepository.fetchShows(movieID, theaterID),HttpStatus.OK);
    }

    @Override
    public ResponseEntity<List<ShowModel>> fetchSeats(int showID) {
        try{
            return new ResponseEntity<>(showRepository.fetchSeats(showID),HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(showRepository.fetchSeats(showID),HttpStatus.OK);
    }

}
