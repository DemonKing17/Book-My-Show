package com.example.demo.service.impl;

import com.example.demo.model.ShowModel;
import com.example.demo.repository.ShowRepository;
import com.example.demo.service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
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
    public void setSlectedSeats(int showId,int[] selectedSeats){
        ShowModel showModel=showRepository.findById(showId).get();
        String selectSeat = showModel.getSelected_seat();
        if(selectSeat==null){
            selectSeat = Arrays.toString(selectedSeats).replaceAll("\\[|\\]", "");;
        }else{
            selectSeat = selectSeat+","+Arrays.toString(selectedSeats).replaceAll("\\[|\\]", "");;
        }
        showModel.setSelected_seat(selectSeat);
        showRepository.save(showModel);
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
    public ResponseEntity<ShowModel> fetchSeats(int showID) {
        try{
            return new ResponseEntity<ShowModel>(showRepository.fetchSeats(showID),HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<ShowModel>(showRepository.fetchSeats(showID),HttpStatus.OK);
    }

}
