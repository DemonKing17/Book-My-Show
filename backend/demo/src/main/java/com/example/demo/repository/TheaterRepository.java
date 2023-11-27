package com.example.demo.repository;

import com.example.demo.model.TheaterModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TheaterRepository extends JpaRepository <TheaterModel,String> {
}
