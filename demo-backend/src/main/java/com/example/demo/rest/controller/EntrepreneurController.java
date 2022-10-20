package com.example.demo.rest.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.EntrepreneurDTO;
import com.example.demo.dto.mapper.EntrepreneurMapper;
import com.example.demo.entity.Entrepreneur;
import com.example.demo.service.IEntrepreneurService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(EntrepreneurController.REQUEST_MAPPING)
public class EntrepreneurController {

    public static final String REQUEST_MAPPING = "entrepreneur";

    @Autowired
    private IEntrepreneurService entrepreneurService;
    @Autowired
    private EntrepreneurMapper entrepreneurMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public EntrepreneurDTO save(@RequestBody EntrepreneurDTO entrepreneurDTO) {
        Entrepreneur entrepreneur = entrepreneurMapper.asEntity(entrepreneurDTO);
        return entrepreneurMapper.asDTO(entrepreneurService.save(entrepreneur));
    }


    @GetMapping("/{id}")
    public EntrepreneurDTO findById(@PathVariable("id") Integer id) {
        Entrepreneur entrepreneur = entrepreneurService.findById(id).orElse(null);
        return entrepreneurMapper.asDTO(entrepreneur);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        entrepreneurService.deleteById(id);
    }


    @GetMapping
    public List<EntrepreneurDTO> list() {
        return entrepreneurMapper.asDTOList(entrepreneurService.findAll());
    }


    @GetMapping("/page-query")
    public Page<EntrepreneurDTO> pageQuery(Pageable pageable) {
        Page<Entrepreneur> entrepreneurPage = entrepreneurService.findAll(pageable);
        List<EntrepreneurDTO> dtoList = entrepreneurPage
                .stream()
                .map(entrepreneurMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, entrepreneurPage.getTotalElements());
    }

    @PutMapping("/{id}")
    public EntrepreneurDTO update(@RequestBody EntrepreneurDTO entrepreneurDTO, @PathVariable("id") Integer id) {
        Entrepreneur entrepreneur = entrepreneurMapper.asEntity(entrepreneurDTO);
        return entrepreneurMapper.asDTO(entrepreneurService.update(entrepreneur, id));
    }

}