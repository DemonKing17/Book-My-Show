package com.example.demo.model;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "shows")
@Data
public class ShowModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String show_start_time;
    private Date show_date;
    private int movie_id;
    private int theater_id;
    private int price;
    private String selected_seat;
    private int theater_capacity;
    @UpdateTimestamp
    private Timestamp updated_at;
    @CreationTimestamp
    private Timestamp created_at;
    public ShowModel() {
    }

    public ShowModel(String show_start_time,Date show_date,int theater_capacity, int movie_id, int theater_id, int price, Timestamp updated_at,String selected_seat) {
        this.show_start_time = show_start_time;
        this.show_date = show_date;
        this.movie_id = movie_id;
        this.theater_id = theater_id;
        this.price = price;
        this.updated_at = updated_at;
        this.selected_seat = selected_seat;
        this.theater_capacity = theater_capacity;
    }

}
