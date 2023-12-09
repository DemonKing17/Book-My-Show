package com.example.demo.service;

import com.example.demo.model.BookingModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface BookingService {
    public String createBookingDetails(int[] selectedSeats,int showId,String token );

    public ResponseEntity<List<BookingModel>> fetchBookingDetails(String token);
}
