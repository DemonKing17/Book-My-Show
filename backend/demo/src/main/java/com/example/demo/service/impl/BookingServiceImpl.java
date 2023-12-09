package com.example.demo.service.impl;

import com.example.demo.model.BookingModel;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    BookingRepository bookingRepository;
    @Autowired
    UserServiceImpl userService;
    @Autowired
    ShowServiceImpl showService;

    @Override
    public String createBookingDetails(int[] selectedSeats, int showId, String token) {
        showService.setSlectedSeats(showId,selectedSeats);
        BookingModel bookingModel = new BookingModel();
        bookingModel.setBooked_seats(Arrays.toString(selectedSeats));
        bookingModel.setShow_id(showId);
        bookingModel.setUser_id(userService.getUserId(token));
        bookingRepository.save(bookingModel);
        return "success";
    }

    @Override
    public ResponseEntity<List<BookingModel>> fetchBookingDetails(String token) {
        return new ResponseEntity<>(bookingRepository.findAllByUserId(userService.getUserId(token)), HttpStatus.OK);
    }
}
