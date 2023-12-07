package com.example.demo.service.impl;

import com.example.demo.model.BookingModel;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    BookingRepository bookingRepository;
    @Override
    public String createBookingDetails(BookingModel bookingModel,int showId) {
        bookingModel.setShow_id(showId);
        bookingRepository.save(bookingModel);
        return "success";
    }
}
