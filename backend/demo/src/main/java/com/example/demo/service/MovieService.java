package com.example.demo.service;

import com.example.demo.model.MovieModel;

import java.util.List;

public interface MovieService {
    public String CreateMovieDetails(MovieModel movieModel);
    public String UpdateMovieDetails(MovieModel movieModel);
    public String DeleteMovieDetails(String MovieModel);
    public MovieModel GetMovieDetails(String userID);
    public List<MovieModel> GetAllMovieDetails();
}

