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

import com.example.demo.dto.InvesterDTO;
import com.example.demo.dto.mapper.InvesterMapper;
import com.example.demo.entity.Invester;
import com.example.demo.service.IInvesterService;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(InvesterController.REQUEST_MAPPING)
public class InvesterController {

    public static final String REQUEST_MAPPING = "invester";

    @Autowired
    private IInvesterService investerService;
    
    @Autowired
    private InvesterMapper investerMapper;


    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public InvesterDTO save(@RequestBody InvesterDTO entrepreneurDTO) {
    	Invester invester = investerMapper.asEntity(entrepreneurDTO);
        return investerMapper.asDTO(investerService.save(invester));
    }


    @GetMapping("/{id}")
    public InvesterDTO findById(@PathVariable("id") Integer id) {
        Invester invester = investerService.findById(id).orElse(null);
        return investerMapper.asDTO(invester);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        investerService.deleteById(id);
    }


    @GetMapping
    public List<InvesterDTO> list() {
        return investerMapper.asDTOList(investerService.findAll());
    }


    @GetMapping("/page-query")
    public Page<InvesterDTO> pageQuery(Pageable pageable) {
        Page<Invester> investerPage = investerService.findAll(pageable);
        List<InvesterDTO> dtoList = investerPage
                .stream()
                .map(investerMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, investerPage.getTotalElements());
    }

    @PutMapping("/{id}")
    public InvesterDTO update(@RequestBody InvesterDTO investerDTO, @PathVariable("id") Integer id) {
        Invester invester = investerMapper.asEntity(investerDTO);
        return investerMapper.asDTO(investerService.update(invester, id));
    }

}