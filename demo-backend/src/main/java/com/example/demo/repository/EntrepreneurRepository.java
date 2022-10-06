package com.example.demo.repository;

import com.example.demo.entity.Entrepreneur;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntrepreneurRepository extends PagingAndSortingRepository<Entrepreneur, Integer> {
/*
    Extensión de CrudRepository para proporcionar métodos adicionais para recuperar entidades mediante a abstracción de paxinación e clasificación.
*/
}