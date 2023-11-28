package com.example.demo.service.impl;

import com.example.demo.model.ShowModel;
import com.example.demo.repository.ShowRepository;
import com.example.demo.service.ShowService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowServiceImpl implements ShowService {
    ShowRepository showRepository;
    public ShowServiceImpl(ShowRepository showRepository) {
        this.showRepository = showRepository;
    }

    @Override
    public String CreateShowDetails(ShowModel showModel) {
        showRepository.save(showModel);
        return "success";
    }

}
