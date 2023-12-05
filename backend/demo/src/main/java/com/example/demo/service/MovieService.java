package com.example.demo.service;
import com.example.demo.model.MovieListResponse;
import com.example.demo.model.MovieModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MovieService {

    public ResponseEntity<String> createMovieDetails(MovieModel movieModel);
    public ResponseEntity<MovieModel> fetchMovieUsingName(String name);
    public MovieListResponse fetchAllMovies();
}

