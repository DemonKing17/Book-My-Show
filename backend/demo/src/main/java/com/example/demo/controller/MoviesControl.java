package com.example.demo.controller;

import com.example.demo.model.MovieModel;
import com.example.demo.service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MoviesControl {
    MovieService movieService;

    public MoviesControl(MovieService movieService) {
        this.movieService = movieService;
    }
    @GetMapping
    public String createUserDetails(@RequestBody MovieModel movieModel){
        movieService.createUserDetails(movieModel);
        return "Created Succesfully";
    }

    @GetMapping
    public MovieModel fetchUsingName(String searchIn){
        return fetchUsingName(searchIn);
    }
}
