package com.example.demo.model;


import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "movies")
public class MovieModel {

    @Id
    @GeneratedValue
    private int id;
    private String title;
    private String summary;
    private String category;
    @DateTimeFormat
    private LocalDate release_date;
    @DateTimeFormat
    private LocalDate ending_date;
    private String created_at;
    private String updated_at;

    public MovieModel() {
    }

    public MovieModel(String title, String summary, String category, LocalDate release_date, LocalDate ending_date, String created_at, String updated_at) {
        this.title = title;
        this.summary = summary;
        this.category = category;
        this.release_date = release_date;
        this.ending_date = ending_date;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public LocalDate getRelease_date() {
        return release_date;
    }

    public void setRelease_date(LocalDate release_date) {
        this.release_date = release_date;
    }

    public LocalDate getEnding_date() {
        return ending_date;
    }

    public void setEnding_date(LocalDate ending_date) {
        this.ending_date = ending_date;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(String updated_at) {
        this.updated_at = updated_at;
    }

}
