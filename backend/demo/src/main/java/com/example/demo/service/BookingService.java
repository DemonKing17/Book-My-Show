package com.example.demo.service;

import com.example.demo.model.BookingModel;

import java.util.List;

public interface BookingService {
    public String CreateBookingDetails(BookingModel bookingModel);
    public String UpdateBookingDetails(BookingModel bookingModel);

    public String DeleteBookingDetails(String userID);
    public BookingModel GetBookingDetails(String userID);
    public List<BookingModel> GetAllBookingDetails();
}
