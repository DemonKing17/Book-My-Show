package com.example.demo.repository;

import com.example.demo.model.MovieModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface MoviesRepository extends JpaRepository<MovieModel,Integer> {

    @Query(value = "SELECT s FROM MovieModel s WHERE s.title=:title")
    public MovieModel fetchUsingName(@Param("title")String title);

}
