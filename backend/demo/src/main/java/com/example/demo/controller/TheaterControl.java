package com.example.demo.controller;


import com.example.demo.model.TheaterModel;
import com.example.demo.service.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cinehub/v1/theaters")
public class TheaterControl {
    @Autowired
    TheaterService theaterService;
    @GetMapping("/{movieID}")
    public ResponseEntity<List<TheaterModel>> fetchTheaterDetails(@PathVariable int movieID){
        return theaterService.fetchTheaterDetails(movieID);
    }
    @PostMapping("/create")
    public ResponseEntity<String> createTheaterDetails(@RequestBody TheaterModel theaterModel){
        return theaterService.CreateTheaterDetails(theaterModel);
    }
}
