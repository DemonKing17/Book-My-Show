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

    @GetMapping("/{userID}")
    public TheaterModel getSingleTheaterDetails(@PathVariable("userID")String userID) {
        return theaterService.GetTheaterDetails(userID);
    }

    @GetMapping
    public List<TheaterModel> getAllTheaterDetails(){
        return theaterService.GetAllTheaterDetails();
    }

    @PostMapping
    public String createTheaterDetails(@RequestBody TheaterModel theaterModel){
        theaterService.CreateTheaterDetails(theaterModel);
        return "created Successfully";
    }

    @PutMapping
    public String updateTheaterDetails(@RequestBody TheaterModel theaterModel){
        theaterService.UpdateTheaterDetails(theaterModel);
        return "user details updated";
    }

    @DeleteMapping("/{userID}")
    public String deleteTheaterDetails(@PathVariable("userID") String userID){
        theaterService.DeleteTheaterDetails(userID);
        return "user details deleted";
    }

}
