package com.example.demo.controller;

import com.example.demo.model.MovieModel;
import com.example.demo.model.MovieListResponse;
import com.example.demo.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cinehub/v1/movies")
public class MoviesControl {
    @Autowired
    MovieService movieService;
    @PostMapping("/create")
    public ResponseEntity<String> createMovieDetails(@RequestBody MovieModel movieModel){
        return movieService.createMovieDetails(movieModel);
    }

    @GetMapping
    public ResponseEntity<MovieListResponse> getAllMovies() {
        MovieListResponse response = movieService.fetchAllMovies();
        if (response.getMovieList() != null) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(500).body(response);
        }
    }
    @GetMapping("/getmovie")
    public ResponseEntity<MovieModel> fetchMovieUsingName(@RequestBody String searchIn){
        return movieService.fetchMovieUsingName(searchIn);
    }
}
