package com.example.demo.controller;

import com.example.demo.model.MovieModel;
import com.example.demo.model.ShowModel;
import com.example.demo.service.MovieService;
import com.example.demo.service.ShowService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowControl {
    ShowService showService;

    public ShowControl(ShowService showService) {
        this.showService = showService;
    }

    @GetMapping("/{userID}")
    public ShowModel getSingleShowDetails(@PathVariable("userID")String userID) {
        return showService.GetShowDetails(userID);
    }

    @GetMapping
    public List<ShowModel> getAllMovieDetails(){
        return showService.GetAllShowDetails();
    }

    @PostMapping
        public String createShowDetails(@RequestBody ShowModel showModel){
        showService.CreateShowDetails(showModel);
        return "created Successfully";
    }

    @PutMapping
    public String updateShowDetails(@RequestBody ShowModel showModel){
        showService.UpdateShowDetails(showModel);
        return "user details updated";
    }

    @DeleteMapping("/{userID}")
    public String deleteShowDetails(@PathVariable("userID") String userID){
        showService.DeleteShowDetails(userID);
        return "user details deleted";
    }

}
