package com.example.demo.service;

import com.example.demo.entity.Entrepreneur;
import com.example.demo.repository.EntrepreneurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EntrepreneurServiceImpl implements IEntrepreneurService {

    @Autowired
    private EntrepreneurRepository entrepreneurRepository;

    public Entrepreneur getEntrepreneur(Integer id) {
        return entrepreneurRepository.findById(id).orElse(null);
    }

    @Override
    public List<Entrepreneur> findAll() {
        return entrepreneurRepository.findAll();
    }

    @Override
    public Entrepreneur createEntrepreneur(Entrepreneur entrepreneur) {
        return entrepreneurRepository.save(entrepreneur);
    }

    @Override
    public Integer deleteEntrepreneur(Integer id) {
        entrepreneurRepository.deleteById(id);
        return id;
    }

}