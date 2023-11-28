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
    public String createUserDetails(MovieModel movieModel) {
        moviesRepository.save(movieModel);
        return "Success";
    }

    @Override
    public MovieModel fetchUsingName(String name) {
        return moviesRepository.fetchUsingName(name);
    }
}
