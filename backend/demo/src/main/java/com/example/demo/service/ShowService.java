package com.example.demo.service;

import com.example.demo.model.ShowModel;
import com.example.demo.model.UserModel;

import java.util.List;

public interface ShowService {
    public String CreateShowDetails(ShowModel showModel);
    public String UpdateShowDetails(ShowModel showModel);

    public String DeleteShowDetails(String userID);
    public ShowModel GetShowDetails(String userID);
    public List<ShowModel> GetAllShowDetails();
}
