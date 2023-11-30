package com.example.demo.repository;

import com.example.demo.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ShowRepository extends JpaRepository <ShowModel,String> {

    @Query(value = "SELECT s FROM ShowModel s " +
            "JOIN TheaterModel t ON s.theater_id = t.id " +
            "JOIN MovieModel m ON s.movie_id = m.id " +
            "WHERE m.id = :val1 " +
            "AND t.id = :val2")
    public List<ShowModel> fetchShows(@Param("val1") int movieID,@Param("val2") int theaterID);

    @Query(value = "SELECT s.theater_capacity,s.selected_seat,s.price FROM ShowModel s "+
                    "WHERE s.id = :val")
    public List<ShowModel> fetchSeats(@Param("val")int showID);

}
