package com.example.demo.rest.controller;

import java.util.List;
import java.util.stream.Collectors;

import com.example.demo.service.impl.IBusinessSectorService;
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

import com.example.demo.dto.BusinessSectorDTO;
import com.example.demo.entity.BusinessSector;
import com.example.demo.dto.mapper.BusinessSectorMapper;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(BusinesSectorController.REQUEST_MAPPING)
public class BusinesSectorController {

    public static final String REQUEST_MAPPING = "businessSector";

    @Autowired
    private IBusinessSectorService businessSectorService;
    @Autowired
    private BusinessSectorMapper businesSectorMapper;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public BusinessSectorDTO save(@RequestBody BusinessSectorDTO businessSectorDTO) {
    	BusinessSector bussinesSector = businesSectorMapper.asEntity(businessSectorDTO);
        return businesSectorMapper.asDTO(businessSectorService.save(bussinesSector));
    }


    @GetMapping("/{id}")
    public BusinessSectorDTO findById(@PathVariable("id") Integer id) {
    	BusinessSector businessSector = businessSectorService.findById(id).orElse(null);
        return businesSectorMapper.asDTO(businessSector);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
    	businessSectorService.deleteById(id);
    }


    @GetMapping
    public List<BusinessSectorDTO> list() {
        return businesSectorMapper.asDTOList(businessSectorService.findAll());
    }


    @GetMapping("/page-query")
    public Page<BusinessSectorDTO> pageQuery(Pageable pageable) {
        Page<BusinessSector> businessSectorPage = businessSectorService.findAll(pageable);
        List<BusinessSectorDTO> dtoList = businessSectorPage
                .stream()
                .map(businesSectorMapper::asDTO).collect(Collectors.toList());
        return new PageImpl<>(dtoList, pageable, businessSectorPage.getTotalElements());
    }

    @PutMapping("/{id}")
    public BusinessSectorDTO update(@RequestBody BusinessSectorDTO businessSectorDTO, @PathVariable("id") Integer id) {
    	BusinessSector businessSector = businesSectorMapper.asEntity(businessSectorDTO);
        return businesSectorMapper.asDTO(businessSectorService.update(businessSector, id));
    }

}