package com.example.demo.model;


import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "shows")
public class ShowModel {
    @Id
    @GeneratedValue
    private int id;
    private String show_start_time;
    private String show_end_time;
    private int movie_id;
    private int theater_id;
    private int price;

    public ShowModel(String show_start_time, String show_end_time, int movie_id, int theater_id, int price, String updated_at) {
        this.show_start_time = show_start_time;
        this.show_end_time = show_end_time;
        this.movie_id = movie_id;
        this.theater_id = theater_id;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public int getMovie_id() {
        return movie_id;
    }

    public void setMovie_id(int movie_id) {
        this.movie_id = movie_id;
    }

    public int getTheater_id() {
        return theater_id;
    }

    public void setTheater_id(int theater_id) {
        this.theater_id = theater_id;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public ShowModel() {

    }


}
