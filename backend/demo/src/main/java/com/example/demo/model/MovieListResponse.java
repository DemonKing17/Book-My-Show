package com.example.demo.model;

import java.util.List;

public class MovieListResponse {
    public List<MovieModel> movieList;

    public List<MovieModel> getMovieList() {
        return movieList;
    }

    public void setMovieList(List<MovieModel> movieList) {
        this.movieList = movieList;
    }

    public MovieListResponse(List<MovieModel> movieList) {
        this.movieList = movieList;
    }
}
