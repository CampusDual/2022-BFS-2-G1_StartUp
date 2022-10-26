package com.example.demo.rest.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.InvesterDTO;
import com.example.demo.dto.mapper.InvesterMapper;
import com.example.demo.entity.Invester;
import com.example.demo.entity.enums.ResponseCodeEnum;
import com.example.demo.service.IInvesterService;
import com.example.demo.utils.Constant;

import lombok.extern.java.Log;

@Log
@CrossOrigin(origins = {"http://localhost:4201"})
@RestController
@RequestMapping(InvesterController.REQUEST_MAPPING)
public class InvesterController {

    public static final String REQUEST_MAPPING = "invester";
	private static final Logger LOGGER = LoggerFactory.getLogger(InvesterController.class);

    @Autowired
    private IInvesterService investerService;

    @Autowired
    private InvesterMapper investerMapper;


    @PostMapping
	@PreAuthorize("hasAnyAuthority('INVESTORS')")
	public ResponseEntity<?> createInvestor(@Valid @RequestBody Invester createInvesterRequest, BindingResult result) {
		LOGGER.info("saveInvestor in progress...");
		Invester investerNew = null;
		Map<String, Object> response = new HashMap<>();
		HttpStatus status = HttpStatus.CREATED;
		String message = Constant.INVESTER_CREATE_SUCCESS;
		if(!result.hasErrors()) {
			try {
				investerNew = investerService.save(createInvesterRequest);	
				response.put(Constant.RESPONSE_CODE, ResponseCodeEnum.OK.getValue());
			} catch (DataAccessException e) {
				if(e.getMostSpecificCause().getMessage().contains(Constant.INVESTER_NAME_REQUIRED)) {
					message = Constant.INVESTER_NAME_REQUIRED;
					status= HttpStatus.OK;
				}else {
					message = Constant.DATABASE_QUERY_ERROR;
					status= HttpStatus.BAD_REQUEST;
				}
				
				response.put(Constant.RESPONSE_CODE, ResponseCodeEnum.KO.getValue());
				response.put(Constant.ERROR, e.getMessage().concat(": ").concat(e.getMostSpecificCause().getMessage()));
				
			}
			response.put("invester", investerNew);
		}else {
			List<String> errors = new ArrayList<>();
			for(FieldError error : result.getFieldErrors()) {
				errors.add(error.getDefaultMessage());
			}
			response.put(Constant.RESPONSE_CODE, ResponseCodeEnum.WARNING.getValue());
			message = Constant.INVESTER_NOT_CREATED;
			response.put(Constant.ERROR, errors);
			status = HttpStatus.BAD_REQUEST;
		}
		
		LOGGER.info("saveInvestor is finished...");
		response.put(Constant.MESSAGE, message);
		
		return new ResponseEntity<Map<String, Object>>(response, status);
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