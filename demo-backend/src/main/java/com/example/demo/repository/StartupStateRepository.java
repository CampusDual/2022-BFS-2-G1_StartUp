package com.example.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.StartupState;

@Repository
public interface StartupStateRepository extends PagingAndSortingRepository<StartupState, Integer> {

}