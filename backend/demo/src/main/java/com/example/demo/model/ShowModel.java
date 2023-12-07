package com.example.demo.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name = "shows")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ShowModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String show_time;
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
}
