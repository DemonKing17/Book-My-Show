package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "bookings")
public class BookingModel {

    @Id
    private String id;

    public BookingModel(String show_id, String user_id, String booking_time, String payment_method, String getPayment_method, int seats, String seat_number) {
        this.show_id = show_id;
        this.user_id = user_id;
        this.booking_time = booking_time;
        this.payment_method = payment_method;
        this.getPayment_method = getPayment_method;
        this.seats = seats;
        this.seat_number = seat_number;
    }

    private String show_id;
    private String user_id;
    private String booking_time;
    private String payment_method;
    private String getPayment_method;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getShow_id() {
        return show_id;
    }

    public void setShow_id(String show_id) {
        this.show_id = show_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getBooking_time() {
        return booking_time;
    }

    public void setBooking_time(String booking_time) {
        this.booking_time = booking_time;
    }

    public String getPayment_method() {
        return payment_method;
    }

    public void setPayment_method(String payment_method) {
        this.payment_method = payment_method;
    }

    public String getGetPayment_method() {
        return getPayment_method;
    }

    public void setGetPayment_method(String getPayment_method) {
        this.getPayment_method = getPayment_method;
    }

    public int getSeats() {
        return seats;
    }

    public void setSeats(int seats) {
        this.seats = seats;
    }

    public String getSeat_number() {
        return seat_number;
    }

    public void setSeat_number(String seat_number) {
        this.seat_number = seat_number;
    }

    private int seats;
    private String seat_number;

    public BookingModel() {
        this.id = UUID.randomUUID().toString();
    }



}
