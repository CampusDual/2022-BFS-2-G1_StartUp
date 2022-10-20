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

import com.example.demo.dto.RangeInvesterDTO;
import com.example.demo.dto.mapper.RangeInvesterMapper;
import com.example.demo.entity.RangeInvester;
import com.example.demo.dto.mapper.RangeInvesterMapper;
import com.example.demo.service.impl.IRangeInvesterService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(RangeInvesterController.REQUEST_MAPPING)
public class RangeInvesterController {

    public static final String REQUEST_MAPPING = "rangeInvester";

    @Autowired
    private IRangeInvesterServiceImpl rangeInvesterService;
    
    @Autowired
    private RangeInvesterMapper rangeInvesterMapper;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RangeInvesterDTO save(@RequestBody RangeInvesterDTO entrepreneurDTO) {
    	RangeInvester rangeInvester = rangeInvesterMapper.asEntity(entrepreneurDTO);
        return rangeInvesterMapper.asDTO(rangeInvesterService.save(rangeInvester));
    }


    @GetMapping("/{id}")
    public RangeInvesterDTO findById(@PathVariable("id") Integer id) {
    	RangeInvester invester = rangeInvesterService.findById(id).orElse(null);
        return rangeInvesterMapper.asDTO(invester);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
    	rangeInvesterService.deleteById(id);
    }


    @GetMapping
    public List<RangeInvesterDTO> list() {
        return rangeInvesterMapper.asDTOList(rangeInvesterService.findAll());
    }


    @GetMapping("/page-query")
    public Page<RangeInvesterDTO> pageQuery(Pageable pageable) {
        Page<RangeInvester> investerPage = rangeInvesterService.findAll(pageable);
        List<RangeInvesterDTO> dtoList = investerPage
                .stream()
                .map(rangeInvesterMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, investerPage.getTotalElements());
    }

    @PutMapping("/{id}")
    public RangeInvesterDTO update(@RequestBody RangeInvesterDTO investerDTO, @PathVariable("id") Integer id) {
        RangeInvester rangeInvester = rangeInvesterMapper.asEntity(investerDTO);
        return rangeInvesterMapper.asDTO(rangeInvesterService.update(rangeInvester, id));
    }

}