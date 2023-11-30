package com.example.demo.service;

import com.example.demo.model.ShowModel;
import com.example.demo.model.UserModel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ShowService {


    public ResponseEntity<List<ShowModel>> fetchShows(int movieID, int theaterID);
    public ResponseEntity<List<ShowModel>> fetchSeats(int showID);
    public ResponseEntity<String> CreateShowDetails(ShowModel showModel);
}
