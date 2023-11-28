package com.example.demo.repository;

import com.example.demo.model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface MoviesRepository extends JpaRepository<MovieModel,String> {

    @Query(value = "SELECT s FROM movies s where name=:val")
    public MovieModel fetchUsingName(@Param("val")String nammeee);
}
