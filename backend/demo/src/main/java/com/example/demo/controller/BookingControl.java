package com.example.demo.controller;

import com.example.demo.model.BookingModel;
import com.example.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("cinehub/v1/booking")
public class BookingControl {
    @Autowired
    BookingService bookingService;
    @PostMapping("/{bookID}")
        public String createBookingDetails(@RequestBody BookingModel bookingModel,@PathVariable int bookID){
        bookingService.createBookingDetails(bookingModel,bookID);
        return "created Successfully";
    }
}
