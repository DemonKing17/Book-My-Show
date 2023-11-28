package com.example.demo.service;

import com.example.demo.model.MovieModel;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieService {

    public String createUserDetails(MovieModel movieModel);
    public MovieModel fetchUsingName(String name);
}

