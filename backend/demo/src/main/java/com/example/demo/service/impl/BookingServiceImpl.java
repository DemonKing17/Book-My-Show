package com.example.demo.service.impl;

import com.example.demo.model.BookingModel;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.BookingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {

    BookingRepository bookingRepository;

    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public String CreateBookingDetails(BookingModel bookingModel) {
        bookingRepository.save(bookingModel);
        return "success";
    }

    @Override
    public String UpdateBookingDetails(BookingModel bookingModel) {
        bookingRepository.save(bookingModel);
        return "success";
    }

    @Override
    public String DeleteBookingDetails(String userID) {
        bookingRepository.deleteById(userID);
        return "success";
    }

    @Override
    public BookingModel GetBookingDetails(String userID) {
        return bookingRepository.findById(userID).get();
    }

    @Override
    public List<BookingModel> GetAllBookingDetails() {
        return bookingRepository.findAll();
    }
}
