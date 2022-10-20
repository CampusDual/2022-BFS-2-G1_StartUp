package com.example.demo.dto;

import java.io.Serial;
import java.io.Serializable;

import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class RangeInvesterDTO implements Serializable{

	@Serial
	private static final long serialVersionUID = -5193982016520324901L;

	private Integer id;
	
	@NotNull
	private String value;
		
}
