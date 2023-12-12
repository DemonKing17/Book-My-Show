package com.example.demo.repository;

import com.example.demo.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface UserRepository extends JpaRepository <UserModel,Integer> {

    @Query(value = "SELECT u FROM UserModel u " +
            "WHERE u.email_id = :username")
    public UserModel findByUsername(@Param("username") String emailID);

    @Query(value = "SELECT u.id FROM UserModel u Where u.token = :token")
    public int getUserIdByToken(@Param("token") String token);

    @Query(value="SELECT u FROM UserModel u WHERE u.email_id = :username")
    public UserModel getLoginDetails(@Param("username") String username);
}
