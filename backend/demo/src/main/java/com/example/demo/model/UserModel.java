package com.example.demo.model;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "user_register")
public class UserModel {
    @Id
    @GeneratedValue
    private int id;
    private String fullname;
    private int age;
    private int phone;
    private String email_id;
    private String passwor;
    private String token;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserModel(String fullname, int age, int phone, String email_id, String password,String token) {
        this.fullname=fullname;
        this.age = age;
        this.phone = phone;
        this.email_id = email_id;
        this.passwor = password;
        this.token = token;
    }

    public UserModel() {

    }

    public int getUserID() {
        return id;
    }

    public void setUserID(int id){ this.id = id; }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getPasswor() {
        return passwor;
    }

    public void setPasswor(String passwor) {
        this.passwor = passwor;
    }

}
