package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "user_register")
@Data
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fullname;
    private int age;
    private String phone;
    private String email_id;
    private String passwor;
    private String token;
    @CreationTimestamp
    private Timestamp created_at;
    @UpdateTimestamp
    private Timestamp updated_at;

    public UserModel() {
    }

    public UserModel(int id, String fullname, int age, String phone, String email_id, String passwor, String token, Timestamp created_at, Timestamp updated_at) {
        this.id = id;
        this.fullname = fullname;
        this.age = age;
        this.phone = phone;
        this.email_id = email_id;
        this.passwor = passwor;
        this.token = token;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
