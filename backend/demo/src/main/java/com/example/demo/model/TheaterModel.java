package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "theaters")
@Data
public class TheaterModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String theater_name;
    private String location;
    private int capacity;
    @CreationTimestamp
    private Timestamp created_at;
    @UpdateTimestamp
    private Timestamp updated_at;

    public TheaterModel() {
    }

    public TheaterModel(String theater_name, String location, int capacity,Timestamp created_at,Timestamp updated_at) {
        this.theater_name = theater_name;
        this.location = location;
        this.capacity = capacity;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

}
