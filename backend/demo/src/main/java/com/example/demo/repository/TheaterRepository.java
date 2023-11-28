package com.example.demo.repository;

import com.example.demo.model.TheaterModel;
import com.example.demo.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TheaterRepository extends JpaRepository <TheaterModel,String> {

    @Query(value="SELECT distinct u FROM shows s" +
            "JOIN theaters t ON s.theater_id=t.id" +
            "JOIN movies m ON s.movie_id=m.id" +
            "WHERE s.movie_id =:val")
    public List<TheaterModel> fetchTheaterDetails(@Param("val")int Meo);
}
