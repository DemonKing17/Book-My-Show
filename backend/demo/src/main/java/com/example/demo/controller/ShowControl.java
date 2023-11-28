package com.example.demo.controller;

import com.example.demo.model.MovieModel;
import com.example.demo.model.ShowModel;
import com.example.demo.service.MovieService;
import com.example.demo.service.ShowService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shows")
public class ShowControl {
    ShowService showService;

    public ShowControl(ShowService showService) {
        this.showService = showService;
    }

    @PostMapping
        public String createShowDetails(@RequestBody ShowModel showModel){
        showService.CreateShowDetails(showModel);
        return "created Successfully";
    }

}
