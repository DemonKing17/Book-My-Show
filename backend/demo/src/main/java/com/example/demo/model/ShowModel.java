package com.example.demo.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.UUID;

@Entity
@Table(name = "shows")
public class ShowModel {
    @Id
    private String id;
    private String show_start_time;
    private String show_end_time;
    private String movie_id;
    private String theater_id;
    private int price;

    public ShowModel(String show_start_time, String show_end_time, String movie_id, String theater_id, int price, String updated_at) {
        this.show_start_time = show_start_time;
        this.show_end_time = show_end_time;
        this.movie_id = movie_id;
        this.theater_id = theater_id;
        this.price = price;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getShow_start_time() {
        return show_start_time;
    }

    public void setShow_start_time(String show_start_time) {
        this.show_start_time = show_start_time;
    }

    public String getShow_end_time() {
        return show_end_time;
    }

    public void setShow_end_time(String show_end_time) {
        this.show_end_time = show_end_time;
    }

    public String getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(String movie_id) {
        this.movie_id = movie_id;
    }

    public String getTheater_id() {
        return theater_id;
    }

    public void setTheater_id(String theater_id) {
        this.theater_id = theater_id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public ShowModel() {
        this.id = UUID.randomUUID().toString();
    }


}
