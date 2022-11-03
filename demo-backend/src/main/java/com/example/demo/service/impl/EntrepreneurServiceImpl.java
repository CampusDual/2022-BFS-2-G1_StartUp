package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Entrepreneur;
import com.example.demo.repository.EntrepreneurRepository;
import com.example.demo.service.IEntrepreneurService;

@Service
public class EntrepreneurServiceImpl implements IEntrepreneurService {

    @Autowired
    private EntrepreneurRepository repository;

    @Override
    public Entrepreneur save(Entrepreneur entity) {
        return repository.save(entity);
    }

    @Override
    public List<Entrepreneur> save(List<Entrepreneur> entities) {
        return (List<Entrepreneur>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Entrepreneur> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<Entrepreneur> findAll() {
        return (List<Entrepreneur>) repository.findAll();
    }

    @Override
    public Page<Entrepreneur> findAll(Pageable pageable) {
        Page<Entrepreneur> entityPage = repository.findAll(pageable);
        List<Entrepreneur> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public Entrepreneur update(Entrepreneur entity, Integer id) {
        Optional<Entrepreneur> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}