package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RangeInvester;
import com.example.demo.repository.RangeInvesterRepository;
import com.example.demo.service.impl.IRangeInvesterService;

@Service
public class RangeInvesterServiceImpl implements IRangeInvesterService {

    @Autowired
    private RangeInvesterRepository repository;

    @Override
    public RangeInvester save(RangeInvester entity) {
        return repository.save(entity);
    }

    @Override
    public List<RangeInvester> save(List<RangeInvester> entities) {
        return (List<RangeInvester>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<RangeInvester> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<RangeInvester> findAll() {
        return (List<RangeInvester>) repository.findAll();
    }

    @Override
    public Page<RangeInvester> findAll(Pageable pageable) {
        Page<RangeInvester> entityPage = repository.findAll(pageable);
        List<RangeInvester> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public RangeInvester update(RangeInvester entity, Integer id) {
        Optional<RangeInvester> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}