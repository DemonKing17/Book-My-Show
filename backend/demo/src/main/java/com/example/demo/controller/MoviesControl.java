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

    @GetMapping("/{userID}")
    public MovieModel getSingleMovieDetails(@PathVariable("userID")String userID) {
        return movieService.GetMovieDetails(userID);
    }

    @GetMapping
    public List<MovieModel> getAllMovieDetails(){
        return movieService.GetAllMovieDetails();
    }

    @PostMapping
        public String createMovieDetails(@RequestBody MovieModel movieModel){
        movieService.CreateMovieDetails(movieModel);
        return "created Successfully";
    }

    @PutMapping
    public String updateMovieDetails(@RequestBody MovieModel movieModel){
        movieService.UpdateMovieDetails(movieModel);
        return "user details updated";
    }

    @DeleteMapping("/{userID}")
    public String deleteMoviesDetails(@PathVariable("userID") String userID){
        movieService.DeleteMovieDetails(userID);
        return "user details deleted";
    }

}
