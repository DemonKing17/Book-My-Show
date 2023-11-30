package com.example.demo.model;

import com.example.demo.model.MovieModel;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;
import java.time.LocalDate;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "bookings")
public class BookingModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int show_id;
    private int user_id;
    @CreationTimestamp
    private Timestamp booking_time;
    private String payment_method;
    private String getPayment_method;
    private int seats;
    private String seat_number;

}
