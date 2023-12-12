package com.example.demo.repository;

import com.example.demo.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShowRepository extends JpaRepository <ShowModel,Integer> {

    @Query(value = "SELECT s FROM ShowModel s " +
            "JOIN TheaterModel t ON s.theater_id = t.id " +
            "JOIN MovieModel m ON s.movie_id = m.id " +
            "WHERE m.id = :theaterId " +
            "AND t.id = :movieId")
    public List<ShowModel> fetchShows(@Param("movieId") int movieID,@Param("theaterId") int theaterID);

    @Query(value = "SELECT s FROM ShowModel s "+
                    "WHERE s.id = :val ")
    public ShowModel fetchSeats(@Param("val")int showID);

}
