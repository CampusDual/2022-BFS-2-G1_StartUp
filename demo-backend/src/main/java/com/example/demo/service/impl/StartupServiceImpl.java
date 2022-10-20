package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Startup;
import com.example.demo.repository.StartupRepository;
import com.example.demo.service.IStartupService;

@Service
public class StartupServiceImpl implements IStartupService {

    @Autowired
    private StartupRepository repository;

    @Override
    public Startup save(Startup entity) {
        return repository.save(entity);
    }

    @Override
    public List<Startup> save(List<Startup> entities) {
        return (List<Startup>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Startup> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<Startup> findAll() {
        return (List<Startup>) repository.findAll();
    }

    @Override
    public Page<Startup> findAll(Pageable pageable) {
        Page<Startup> entityPage = repository.findAll(pageable);
        List<Startup> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public Startup update(Startup entity, Integer id) {
        Optional<Startup> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}