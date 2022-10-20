package com.example.demo.dto;

import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class BusinessSectorDTO implements Serializable{

	private static final long serialVersionUID = 7237352111576876305L;
	
	private Integer id;

	@NotNull
	private String type;
	
}
