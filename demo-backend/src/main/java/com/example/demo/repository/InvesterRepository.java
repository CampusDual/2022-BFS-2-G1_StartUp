package com.example.demo.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Invester;

@Repository
public interface InvesterRepository extends PagingAndSortingRepository<Invester, Integer> {

}