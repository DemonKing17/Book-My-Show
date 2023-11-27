package com.example.demo.repository;

import com.example.demo.model.ShowModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowRepository extends JpaRepository <ShowModel,String> {
}
