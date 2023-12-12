package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonInclude;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
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
    private String img;
    private String category;
    @DateTimeFormat
    private LocalDate release_date;
    @DateTimeFormat
    private LocalDate ending_date;
    @CreationTimestamp
    private String created_at;
    @UpdateTimestamp
    private String updated_at;

}
