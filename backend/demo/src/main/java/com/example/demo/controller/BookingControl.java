package com.example.demo.controller;

import com.example.demo.model.BookingModel;
import com.example.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.support.HttpRequestWrapper;
import org.springframework.web.bind.annotation.*;

import java.net.http.HttpRequest;
import java.util.List;

@RestController
@RequestMapping("cinehub/v1/booking")
public class BookingControl {
    @Autowired
    BookingService bookingService;
    @PostMapping("/seats/{showId}")
        public String createBookingDetails(@RequestBody int[] selectedSeats,@PathVariable int showId,@RequestHeader("token") String token){
        bookingService.createBookingDetails(selectedSeats,showId,token);
        return "created Successfully";
    }
    @GetMapping("/all-booking")
    public ResponseEntity<List<BookingModel>> fetchBookingDetails(@RequestHeader("token") String token){
        return bookingService.fetchBookingDetails(token);
    }
}
