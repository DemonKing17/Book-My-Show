package com.example.demo.repository;

import com.example.demo.model.BookingModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookingRepository extends JpaRepository <BookingModel,Integer> {
    @Query(value = "SELECT b FROM BookingModel b " +
            "WHERE b.user_id = :userId")
    public List<BookingModel> findAllByUserId(@Param("userId") int userId);
}
