package com.example.demo.repository;

import com.example.demo.model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepository extends JpaRepository<MovieModel,String> {
}
