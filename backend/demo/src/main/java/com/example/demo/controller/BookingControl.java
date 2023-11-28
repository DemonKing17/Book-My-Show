package com.example.demo.controller;

import com.example.demo.model.BookingModel;
import com.example.demo.service.BookingService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/booking")
public class BookingControl {
    BookingService bookingService;

    public BookingControl(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
        public String createBookingDetails(@RequestBody BookingModel bookingModel){
        bookingService.CreateBookingDetails(bookingModel);
        return "created Successfully";
    }

}
