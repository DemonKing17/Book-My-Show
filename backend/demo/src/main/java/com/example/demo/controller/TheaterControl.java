package com.example.demo.controller;


import com.example.demo.model.TheaterModel;
import com.example.demo.service.TheaterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/theater")
public class TheaterControl {
    TheaterService theaterService;

    public TheaterControl(TheaterService theaterService) {
        this.theaterService = theaterService;
    }
    @GetMapping("/{i}")
    public List<TheaterModel> fetchTheaterDetails(@RequestBody int i){
        return theaterService.fetchTheaterDetails(i);
    }
    @PostMapping
    public String createTheaterDetails(@RequestBody TheaterModel theaterModel){
        theaterService.CreateTheaterDetails(theaterModel);
        return "created Successfully";
    }

}
