package com.example.demo.controller;

import com.example.demo.model.MovieModel;
import com.example.demo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
public class MoviesControl {
    @Autowired
    MovieService movieService;
    @GetMapping
    public ResponseEntity<String> createMovieDetails(@RequestBody MovieModel movieModel){
        return movieService.createMovieDetails(movieModel);
    }

    @GetMapping("/search")
    public ResponseEntity<MovieModel> fetchMovieUsingName(String searchIn){
        return movieService.fetchMovieUsingName(searchIn);
    }
}
