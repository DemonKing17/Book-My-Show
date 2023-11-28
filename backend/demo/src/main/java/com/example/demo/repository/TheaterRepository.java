package com.example.demo.repository;

import com.example.demo.model.TheaterModel;
import com.example.demo.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TheaterRepository extends JpaRepository <TheaterModel,String> {

    @Query(value="SELECT u FROM ShowModel s" +
            "JOIN theater t ON s.theater_id=t.id" +
            "JOIN movies m ON s.movie_id=m.id" +
            "WHERE s.movie_id =:val")
    public TheaterModel fetchTheaterDetails(@Param("val")int Meo);
}
