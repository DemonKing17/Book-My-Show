package com.example.demo.service;
import com.example.demo.model.MovieModel;
import org.springframework.http.ResponseEntity;

public interface MovieService {

    public ResponseEntity<String> createMovieDetails(MovieModel movieModel);
    public ResponseEntity<MovieModel> fetchMovieUsingName(String name);
}

