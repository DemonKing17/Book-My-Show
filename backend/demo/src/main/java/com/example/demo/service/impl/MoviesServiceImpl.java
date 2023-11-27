package com.example.demo.service.impl;

import com.example.demo.model.MovieModel;
import com.example.demo.repository.MoviesRepository;
import com.example.demo.service.MovieService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MoviesServiceImpl implements MovieService {

    MoviesRepository moviesRepository;

    public MoviesServiceImpl(MoviesRepository moviesRepository){ this.moviesRepository = moviesRepository;}
    @Override
    public String CreateMovieDetails(MovieModel movieModel) {
        moviesRepository.save(movieModel);
        return "success";
    }

    @Override
    public String UpdateMovieDetails(MovieModel movieModel) {
        moviesRepository.save(movieModel);
        return "success";
    }

    @Override
    public String DeleteMovieDetails(String userID) {
        moviesRepository.deleteById(userID);
        return "success";
    }

    @Override
    public MovieModel GetMovieDetails(String userID) {
        return moviesRepository.findById(userID).get();
    }

    @Override
    public List<MovieModel> GetAllMovieDetails() {
        return moviesRepository.findAll();
    }
}
