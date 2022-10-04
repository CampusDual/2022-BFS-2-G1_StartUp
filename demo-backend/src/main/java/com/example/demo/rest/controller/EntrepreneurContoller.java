package com.example.demo.rest.controller;

import com.example.demo.entity.Entrepreneur;
import com.example.demo.service.IEntrepreneurService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(EntrepreneurContoller.REQUEST_MAPPING)
public class EntrepreneurContoller {

    public static final String REQUEST_MAPPING = "entrepreneur";

    @Autowired
    private IEntrepreneurService entrepreneurService;

    @GetMapping(path = "/getEntrepreneurs")
    public @ResponseBody List<Entrepreneur> findAll() {
        log.info("findAll in progress...");
        return entrepreneurService.findAll();
    }

}