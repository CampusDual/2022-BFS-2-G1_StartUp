package com.example.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.BusinessSector;

@Repository
public interface BusinessSectorRepository extends PagingAndSortingRepository<BusinessSector, Integer> {

}