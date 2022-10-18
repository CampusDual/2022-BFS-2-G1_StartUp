package com.example.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.RangeInvester;

@Repository
public interface RangeInvesterRepository extends PagingAndSortingRepository<RangeInvester, Integer> {

}