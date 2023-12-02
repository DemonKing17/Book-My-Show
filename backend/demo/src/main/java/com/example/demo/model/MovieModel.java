package com.example.demo.model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.UUID;
@Data
@NoArgsConstructor
@Entity
@Table(name = "movies")
public class MovieModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String summary;
    @Column(name = "img")
    private String filename;
    private String category;
    @DateTimeFormat
    private LocalDate release_date;
    @DateTimeFormat
    private LocalDate ending_date;
    @CreationTimestamp
    private String created_at;
    @UpdateTimestamp
    private String updated_at;


    public MovieModel(String title,String filename, String summary, String category, LocalDate release_date, LocalDate ending_date, String created_at, String updated_at) {
        this.title = title;
        this.summary = summary;
        this.category = category;
        this.release_date = release_date;
        this.ending_date = ending_date;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.filename = filename;
    }

}
