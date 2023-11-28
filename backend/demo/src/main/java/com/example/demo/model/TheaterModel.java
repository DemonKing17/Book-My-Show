package com.example.demo.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "theaters")
public class TheaterModel {

    @Id
    @GeneratedValue
    private int id;
    private String theatre_name;
    private String location;
    private int capacity;


    public TheaterModel(String theatre_name, String location, int capacity) {
        this.theatre_name = theatre_name;
        this.location = location;
        this.capacity = capacity;
    }

    public TheaterModel() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTheatre_name() {
        return theatre_name;
    }

    public void setTheatre_name(String theatre_name) {
        this.theatre_name = theatre_name;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

}
