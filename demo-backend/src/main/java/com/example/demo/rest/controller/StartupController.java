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

import com.example.demo.dto.StartupDTO;
import com.example.demo.dto.mapper.StartupMapper;
import com.example.demo.entity.Startup;
import com.example.demo.service.IStartupService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(StartupController.REQUEST_MAPPING)
public class StartupController {

    public static final String REQUEST_MAPPING = "startup";

    @Autowired
    private IStartupService startupService;
    
    @Autowired
    private StartupMapper startupMapper;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StartupDTO save(@RequestBody StartupDTO startupDTO) {
    	Startup startup = startupMapper.asEntity(startupDTO);
        return startupMapper.asDTO(startupService.save(startup));
    }


    @GetMapping("/{id}")
    public StartupDTO findById(@PathVariable("id") Integer id) {
    	Startup startup = startupService.findById(id).orElse(null);
        return startupMapper.asDTO(startup);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        startupService.deleteById(id);
    }


    @GetMapping
    public List<StartupDTO> list() {
        return startupMapper.asDTOList(startupService.findAll());
    }


    @GetMapping("/page-query")
    public Page<StartupDTO> pageQuery(Pageable pageable) {
        Page<Startup> startupPage = startupService.findAll(pageable);
        List<StartupDTO> dtoList = startupPage
                .stream()
                .map(startupMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, startupPage.getTotalElements());
    }

    @PutMapping("/{id}")
    public StartupDTO update(@RequestBody StartupDTO startupDTO, @PathVariable("id") Integer id) {
    	Startup startupState = startupMapper.asEntity(startupDTO);
        return startupMapper.asDTO(startupService.update(startupState, id));
    }

}