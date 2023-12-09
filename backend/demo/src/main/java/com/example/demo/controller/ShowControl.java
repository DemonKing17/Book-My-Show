package com.example.demo.controller;

import com.example.demo.model.ShowModel;

import com.example.demo.service.ShowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cinehub/v1/shows")
public class ShowControl {
    @Autowired
    ShowService showService;
    @PostMapping("/create")
    public ResponseEntity<String> createShowDetails(@RequestBody ShowModel showModel){
        return showService.CreateShowDetails(showModel);
    }
    @GetMapping("/{movieID}/{theaterID}")
    public ResponseEntity<List<ShowModel>> fetchShowsUsingID(@PathVariable int movieID,@PathVariable int theaterID){
        return showService.fetchShows(movieID,theaterID);
    }
    @GetMapping("/seats/{showID}")
    public ResponseEntity<List<ShowModel>> fetchSeats(@PathVariable int showID){
        return showService.fetchSeats(showID);
    }
}
