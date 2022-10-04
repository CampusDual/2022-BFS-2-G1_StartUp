package com.example.demo.service;

import com.example.demo.entity.Entrepreneur;

import java.util.List;

public interface IEntrepreneurService {

    Entrepreneur getEntrepreneur(Integer id);

    List<Entrepreneur> findAll();

    Entrepreneur createEntrepreneur(Entrepreneur entrepreneur);

    Integer deleteEntrepreneur(Integer id);

}