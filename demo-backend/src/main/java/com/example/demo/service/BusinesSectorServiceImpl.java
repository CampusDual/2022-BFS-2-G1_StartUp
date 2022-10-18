package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import com.example.demo.service.impl.IBusinessSectorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.demo.entity.BusinessSector;
import com.example.demo.repository.BusinessSectorRepository;


@Service
public class BusinesSectorServiceImpl implements IBusinessSectorService {

    @Autowired
    private BusinessSectorRepository repository;

    @Override
    public BusinessSector save(BusinessSector entity) {
        return repository.save(entity);
    }

    @Override
    public List<BusinessSector> save(List<BusinessSector> entities) {
        return (List<BusinessSector>) repository.saveAll(entities);
    }

    @Override
    public void deleteById(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Optional<BusinessSector> findById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public List<BusinessSector> findAll() {
        return (List<BusinessSector>) repository.findAll();
    }

    @Override
    public Page<BusinessSector> findAll(Pageable pageable) {
        Page<BusinessSector> entityPage = repository.findAll(pageable);
        List<BusinessSector> entities = entityPage.getContent();
        return new PageImpl<>(entities, pageable, entityPage.getTotalElements());
    }

    @Override
    public BusinessSector update(BusinessSector entity, Integer id) {
        Optional<BusinessSector> optional = findById(id);
        if (optional.isPresent()) {
            return save(entity);
        }
        return null;
    }


}