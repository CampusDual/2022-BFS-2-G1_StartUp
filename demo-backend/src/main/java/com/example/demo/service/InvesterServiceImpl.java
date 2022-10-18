package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.service.impl.IInvesterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Invester;
import com.example.demo.repository.InvesterRepository;


@Service
public class InvesterServiceImpl implements IInvesterService {

    @Autowired
    private InvesterRepository repository;

    @Override
    public Invester save(Invester entity) {
        return repository.save(entity);
    }

    @Override
    public List<Invester> save(List<Invester> entities) {
        return (List<Invester>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<Invester> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<Invester> findAll() {
        return (List<Invester>) repository.findAll();
    }

    @Override
    public Page<Invester> findAll(Pageable pageable) {
        Page<Invester> entityPage = repository.findAll(pageable);
        List<Invester> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public Invester update(Invester entity, Integer id) {
        Optional<Invester> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}