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

    @GetMapping("/{userID}")
    public BookingModel getSingleBookingDetails(@PathVariable("userID")String userID) {
        return bookingService.GetBookingDetails(userID);
    }

    @GetMapping
    public List<BookingModel> getAllBookingDetails(){
        return bookingService.GetAllBookingDetails();
    }

    @PostMapping
        public String createBookingDetails(@RequestBody BookingModel bookingModel){
        bookingService.CreateBookingDetails(bookingModel);
        return "created Successfully";
    }

    @PutMapping
    public String updateBookingDetails(@RequestBody BookingModel bookingModel){
        bookingService.UpdateBookingDetails(bookingModel);
        return "user details updated";
    }

    @DeleteMapping("/{userID}")
    public String deleteBookingDetails(@PathVariable("userID") String userID){
        bookingService.DeleteBookingDetails(userID);
        return "user details deleted";
    }

}
