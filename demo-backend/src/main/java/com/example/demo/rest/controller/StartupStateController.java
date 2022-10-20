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

import com.example.demo.dto.StartupStateDTO;
import com.example.demo.dto.mapper.StartupStateMapper;
import com.example.demo.entity.StartupState;
import com.example.demo.service.IStartupStateService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(StartupStateController.REQUEST_MAPPING)
public class StartupStateController {

    public static final String REQUEST_MAPPING = "startupState";

    @Autowired
    private IStartupStateService startupStateService;
    
    @Autowired
    private StartupStateMapper startupStateMapper;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public StartupStateDTO save(@RequestBody StartupStateDTO entrepreneurDTO) {
    	StartupState startupState = startupStateMapper.asEntity(entrepreneurDTO);
        return startupStateMapper.asDTO(startupStateService.save(startupState));
    }


    @GetMapping("/{id}")
    public StartupStateDTO findById(@PathVariable("id") Integer id) {
    	StartupState startupState = startupStateService.findById(id).orElse(null);
        return startupStateMapper.asDTO(startupState);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        startupStateService.deleteById(id);
    }


    @GetMapping
    public List<StartupStateDTO> list() {
        return startupStateMapper.asDTOList(startupStateService.findAll());
    }


    @GetMapping("/page-query")
    public Page<StartupStateDTO> pageQuery(Pageable pageable) {
        Page<StartupState> startupStatePage = startupStateService.findAll(pageable);
        List<StartupStateDTO> dtoList = startupStatePage
                .stream()
                .map(startupStateMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, startupStatePage.getTotalElements());
    }

    @PutMapping("/{id}")
    public StartupStateDTO update(@RequestBody StartupStateDTO startupDTO, @PathVariable("id") Integer id) {
    	StartupState startupState = startupStateMapper.asEntity(startupDTO);
        return startupStateMapper.asDTO(startupStateService.update(startupState, id));
    }

}