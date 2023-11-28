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

}
