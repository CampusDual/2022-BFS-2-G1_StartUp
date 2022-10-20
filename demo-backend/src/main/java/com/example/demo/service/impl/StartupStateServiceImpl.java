package com.example.demo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.StartupState;
import com.example.demo.repository.StartupStateRepository;
import com.example.demo.service.IStartupStateService;

@Service
public class StartupStateServiceImpl implements IStartupStateService {

    @Autowired
    private StartupStateRepository repository;

    @Override
    public StartupState save(StartupState entity) {
        return repository.save(entity);
    }

    @Override
    public List<StartupState> save(List<StartupState> entities) {
        return (List<StartupState>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<StartupState> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<StartupState> findAll() {
        return (List<StartupState>) repository.findAll();
    }

    @Override
    public Page<StartupState> findAll(Pageable pageable) {
        Page<StartupState> entityPage = repository.findAll(pageable);
        List<StartupState> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public StartupState update(StartupState entity, Integer id) {
        Optional<StartupState> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}